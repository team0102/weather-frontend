import React from 'react';

import SelectBox from '../../../../components/SelectBox/SelectBox';
import { customAxios } from '../../API/API.jsx';
import { API } from '../../../config.js';

const WeatherSection = () => {
  const [selectedLocation, setSelectedLocation] = useState();

  const requestLocationList = async () => {
    try {
      const request = await customAxios.get(API.POPULAR_SEARCHES);
      setSearchesList(request.data.result);
    } catch (error) {
      alert('에러 발생');
    }
  };
  return <div className='weatherSection'>
    <div className='weather'>

    </div>
    <div className='location'>
      <SelectBox name='location' selected={selectedLocation} options/>
    </div>
  </div>;
};

export default WeatherSection;
