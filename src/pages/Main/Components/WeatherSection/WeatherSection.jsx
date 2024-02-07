import React, { useState, useEffect } from 'react';

import SelectBox from '../../../../components/SelectBox/SelectBox.jsx';
import Icon from './components/Icon/Icon.jsx';

import { customAxios, weatherAxios } from '../../../../API/API.jsx';
import { API } from '../../../../../config.js';
import { convertDfsAndXY } from './functions/dfsToXY.js';

import './WeatherSection.scss';
import { LOCATIONS_WITH_XY } from '../../../../data/LocationData/LocationData.js';
import useGeolocationPermission from './hooks/useGeolocationPermissionGranted.js';

const WeatherSection = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialUserLocations = { '0000000000': '현재 위치' };
  const [userLocations, setUserLocations] = useState(initialUserLocations);

  const [weatherInfo, setWeatherInfo] = useState();

  const [xy, setXy] = useState([]);

  const geolocationPermission = useGeolocationPermission();

  useEffect(() => {
    if (geolocationPermission === 'granted') {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude);
        const coord = convertDfsAndXY(
          'toXY',
          position.coords.latitude,
          position.coords.longitude,
        );
        setXy([coord.x, coord.y]);
      });
    } else {
      setXy([60, 127]); // default XY: SEOUL
      const seoul = LOCATIONS_WITH_XY['1100000000'];
      setSelectedLocation({ 1100000000: seoul.location });
    }
  }, [geolocationPermission]);

  useEffect(() => {
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

  const requestWeather = async () => {};

  useEffect(() => {
    // location 변경 시 날씨 새로 요청하여 업데이트
    // setWeatherInfo();
    if (selectedLocation && xy != []) {
      console.log(selectedLocation, xy, import.meta.env.VITE_WEATHER_API_KEY)
      const requestWeatherForecast = async () => {
        const today = new Date();
        const year = today.getFullYear();
        const month =
          today.getMonth() < 9
            ? `0${today.getMonth() + 1}`
            : today.getMonth() + 1;
        const date =
          today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  
        const currentMinute = today.getMinutes();
        const currentHour = today.getHours();
        let baseTime;
        let baseDate;
        // 
        if (currentHour < 2 || (currentMinute <= 10 && currentHour === 2)) {
          // 해당날짜 첫 발표 이전인 경우 (02:10 이전) 전날 마지막 발표시간을 이용
          baseTime = '2300';
          baseDate = `${year}${month}${
            date < 11 ? `0${today.getDate() - 1}` : today.getDate() - 1
          }`;
        } else if (currentMinute <= 10 && currentHour % 3 === 2) {
          // basetime 발표시간 직전 10분 이내인 경우 직전 발표시간을 사용
          baseTime =
            currentHour < 12
              ? `0${currentHour - 3}00`
              : `${currentHour - 3}00`;
          baseDate = `${year}${month}${date}`;
        } else {
          baseTime =
            currentHour < 12
              ? `0${currentHour - (currentHour + 1) % 3}00`
              : `${currentHour - (currentHour + 1) % 3}00`;
          baseDate = `${year}${month}${date}`;
        }

        try {
          const response = await weatherAxios.get(API.WEATHER, {
            params: {
              serviceKey: import.meta.env.VITE_WEATHER_API_KEY,
              numOfRows: 50,
              pageNo: 1,
              dataType: 'JSON',
              base_date: baseDate,
              base_time: baseTime,
              nx: xy[0],
              ny: xy[1],
            },
          });
          console.log(response);
          
        } catch (error) {
          console.log(error);
        }
      };
      requestWeatherForecast();
    }
  }, [selectedLocation, xy]);

  // TODO: sticky 및 transition 적용해서 스크롤 내려도 날씨 항상 보이도록? 논의 후 결정
  return (
    <div className="weatherSection section">
      <div className="location">
        {`${xy[0]}, ${xy[1]}`}
        <SelectBox
          name="location"
          selected={selectedLocation}
          options={userLocations}
          onChange={requestWeather}
        />
      </div>
      {/*
      날씨를 아이콘으로 표시
      TODO: 날씨 정보 얻어와서 알맞는 content 값으로 매핑
      */}
      <div className="weather">
        <div className="weatherIcon">
          <Icon
            content="RainNight"
            path="../../../../../../svg/Main/WeatherSection"
            size="xxxlg"
          />
        </div>
        {/*
        날씨 정보를 값으로 보여주는 컴포넌트
        TODO : 변수화하여 위치기반 값으로 변경
        */}
        <div className="weatherInfo">
          <span className="temperature">10℃ / -10℃</span>
          <span className="weatherState">천둥번개</span>
          <span className="precipitation">10 mm</span>
          <span className="wind">1 m/s</span>
          <span className="windChill">체감온도 -10℃</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;
