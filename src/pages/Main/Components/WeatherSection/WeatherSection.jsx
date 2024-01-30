import React, { useState, useEffect } from 'react';

import SelectBox from '../../../../components/SelectBox/SelectBox';
import IconButton from '../../../../components/IconButton/IconButton.jsx';
import { customAxios } from '../../../../API/API.jsx';
import { API } from '../../../../../config.js';

import './WeatherSection.scss';

const WeatherSection = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialUserLocations = { current: '현재 위치' };
  const [userLocations, setUserLocations] = useState(initialUserLocations);

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

  return (
    <div className="weatherSection">
      <div className="weather">
        <IconButton size="lg" content="Hamburger" color="grayscaleD" />
      </div>
      <div className="location">
        <SelectBox
          name="location"
          selected={selectedLocation}
          options={userLocations}
          onChange={requestWeather}
        />
      </div>
    </div>
  );
};

export default WeatherSection;
