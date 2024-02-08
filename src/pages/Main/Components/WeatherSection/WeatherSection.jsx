import React, { useState, useEffect } from 'react';

import SelectBox from '../../../../components/SelectBox/SelectBox.jsx';
import Icon from './components/Icon/Icon.jsx';

import { customAxios, weatherAxios } from '../../../../API/API.jsx';
import { API } from '../../../../../config.js';
import { convertDfsAndXY } from './functions/dfsToXY.js';

import './WeatherSection.scss';
import { LOCATIONS_WITH_XY } from '../../../../data/LocationData/LocationData.js';
import useGeolocationPermission from './hooks/useGeolocationPermissionGranted.js';
import { fcstDataToServiceData } from './functions/fcstDataToServiceData.js';
import { getBaseDateAndTime } from './functions/getBaseDateAndTime.js';

const WeatherSection = () => {
  // selectBox에서 선택한 위치 값
  const [selectedLocationKey, setSelectedLocationKey] = useState();
  const currentUserLocation = { '0000000000': '현재 위치' };
  // selectBox에 표시할 위치 목록
  const [userLocations, setUserLocations] = useState(currentUserLocation);
  // 날씨 데이터 요청에 사용 할 좌표
  const [xy, setXy] = useState([]);
  // 서비스에 사용할 정제된 날씨 정보
  const [weatherInfo, setWeatherInfo] = useState();

  // 위치정보 권한 상태 변경되면 상태에 따라 위치를 얻거나 기본위치로 변경
  const geolocationPermission = useGeolocationPermission();
  const useGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const coord = convertDfsAndXY(
        'toXY',
        position.coords.latitude,
        position.coords.longitude,
      );
      if (coord.x != xy[0] && coord.y != xy[1]) {
        setXy([coord.x, coord.y]);
      }
    });
  };
  useEffect(() => {
    if (geolocationPermission === 'granted') {
      useGeolocation();
    }
  }, [geolocationPermission]);

  // 사용자가 저장한 지역들 정보 불러오기
  useEffect(() => {
    // 추후 로컬스토리지로 변경
    const requestUserLocations = async () => {
      try {
        const response = await customAxios.get(API.USER_LOCATIONS);
        setUserLocations(prev => ({ ...prev, ...response.data }));
      } catch (error) {
        alert('에러 발생');
      }
    };
    requestUserLocations();
  }, []);

  // selectBox에서 선택값이 변경되면 선택된 위치에 맞는 좌표값을 저장
  useEffect(() => {
    if (selectedLocationKey === '0000000000' && geolocationPermission === 'granted') {
      useGeolocation();
    } else if (selectedLocationKey && selectedLocationKey != '0000000000') {
      const location = LOCATIONS_WITH_XY[selectedLocationKey];
      setXy([location.x, location.y]);
    } 
  }, [selectedLocationKey]);

  useEffect(() => {
    // location 변경 시 날씨 새로 요청하여 업데이트
    if (xy != []) {
      const requestWeatherForecast = async () => {
        // 요청에 사용 할 날짜 및 시간 값을 형식에 맞게 구성
        const {baseDate, baseTime} = getBaseDateAndTime();

        try {
          const fcstData = {};
          // 약 2일간의 예보 값을 얻기 위해 요청 반복
          // TODO: 요청 일자의 이전 데이터도 모두 가져오도록 코드 수정 (최저기온을 위해 필요)
          // TODO: 요청 데이터 캐싱 할 방법 찾아보기
          for (let i = 1; i < 7; i++) {
            const response = await weatherAxios.get(API.WEATHER, {
              params: {
                serviceKey: import.meta.env.VITE_WEATHER_API_KEY,
                numOfRows: 50,
                pageNo: i,
                dataType: 'JSON',
                base_date: baseDate,
                base_time: baseTime,
                nx: xy[0],
                ny: xy[1],
              },
            });
            const data = response.data.response.body.items.item;
            // 결과 데이터 매핑하여 객체로 변환
            data.forEach(item => {
              if (!Object.keys(fcstData).includes(item.fcstDate))
                fcstData[item.fcstDate] = {};
              if (!Object.keys(fcstData[item.fcstDate]).includes(item.fcstTime))
                fcstData[item.fcstDate][item.fcstTime] = {};
              fcstData[item.fcstDate][item.fcstTime][item.category] =
                item.fcstValue;
            });
          }
          // 서비스에 필요한 값을 추출하여 state에 저장
          const weatherInfo = fcstDataToServiceData(fcstData);
          setWeatherInfo(weatherInfo);
        } catch (error) {
          console.log(error);
          // TODO: 에러 발생 시 재시도 하는 로직 필요
        }
      };
      requestWeatherForecast();
    }
  }, [xy]);

  // TODO: sticky 및 transition 적용해서 스크롤 내려도 날씨 항상 보이도록? 논의 후 결정
  return (
    <div className="weatherSection section">
      <div className="location">
        <SelectBox
          name="location"
          selected={selectedLocationKey}
          options={userLocations}
          onChange={setSelectedLocationKey}
        />
      </div>
      <div className="weather">
        <div className="weatherIcon">
          <Icon
            content={
              // 날씨정보가 없는 경우 NoData, 날씨정보가 있는 경우 시간에 따른 아이콘 표시
              !weatherInfo?.weatherKey
                ? 'NoData'
                : weatherInfo.time > 6 && weatherInfo.time < 19
                  ? weatherInfo.weatherKey
                  : `${weatherInfo.weatherKey}Night`
            }
            path="../../../../../../svg/Main/WeatherSection"
            size="xxxlg"
          />
        </div>
        {/* 날씨정보를 값으로 표시 */}
        <div className="weatherInfo">
          <span className="temperature">
            현재기온 {weatherInfo?.temperature}℃
          </span>
          <span className="temperature">
            최저최고 {weatherInfo?.minTemperature}℃ / {weatherInfo?.maxTemperature}℃
          </span>
          <span className="weatherState">{weatherInfo?.weather}</span>
          {weatherInfo?.rain ? (
            <span className="precipitation">{weatherInfo?.rain} mm</span>
          ) : null}
          {weatherInfo?.snow ? (
            <span className="snow">{weatherInfo?.snow} cm</span>
          ) : null}
          <span className="wind">풍속 {weatherInfo?.wind} m/s</span>
          <span className="feelsLike">
            체감온도 {weatherInfo?.feelsLike}℃
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;
