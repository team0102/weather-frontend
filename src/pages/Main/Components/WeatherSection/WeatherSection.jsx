import React, { useState, useEffect } from 'react';

import SelectBox from '../../../../components/SelectBox/SelectBox.jsx';
import { customAxios } from '../../../../API/API.jsx';
import { API } from '../../../../../config.js';

import './WeatherSection.scss';
import Icon from './components/Icon/Icon.jsx';

const WeatherSection = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialUserLocations = { current: '현재 위치' };
  const [userLocations, setUserLocations] = useState(initialUserLocations);
  
  const [weatherInfo, setWeatherInfo] = useState();
  
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
  }, [selectedLocation])

  // TODO: sticky 및 transition 적용해서 스크롤 내려도 날씨 항상 보이도록? 논의 후 결정
  return (
    <div className="weatherSection section">
      <div className="location">
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
          <Icon content="RainNight" path='../../../../../../svg/Main/WeatherSection' size="xxxlg" />
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
