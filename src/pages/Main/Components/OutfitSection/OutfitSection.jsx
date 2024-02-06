import React, { useState, useEffect } from 'react';
import './OutfitSection.scss';
import { API } from '../../../../../config';
import { customAxios } from '../../../../API/API';
import Button from '../../../../components/Button/Button';
import OutfitIcon from './components/OutfitIcon/OutfitIcon';
import RadioGroup from '../../../../components/RadioGroup/RadioGroup';

const OutfitSection = () => {
  const [clothes, setClothes] = useState([]);
  const [selectedTemperatureSensitivity, setSelectedTemperatureSensitivity] =
    useState(0);

  useEffect(() => {
    const requestClothes = async () => {
      try {
        const response = await customAxios.get(API.CLOTHES);
        const { id, ...data } = response.data[0];
        setClothes(Object.values(data).filter(item => item));
      } catch (error) {
        console.log(error);
        alert('에러 발생');
      }
    };
    requestClothes();
  }, []);

  return (
    <div className="outfitSection section">
      <div className="outfitSuggestion">
        <div className="suggestionMessage">
          {/* TODO: 날씨에 따른 문구 변경 로직 */}
          오늘 날씨에는 이렇게 입어보세요~!
        </div>
        <div className="imageRowWrapper">
          {clothes.map((clothes, index) => {
            return <OutfitIcon key={index} imageUrl={clothes.imageUrl} />;
          })}
        </div>
      </div>
      <div className="personalizeWindChill">
        <Button
          children="더위를 타요"
          onClick={() => setSelectedTemperatureSensitivity(-1)}
          color={selectedTemperatureSensitivity === -1 ? 'primary' : 'light'}
        />
        <Button
          children="보통이예요"
          onClick={() => setSelectedTemperatureSensitivity(0)}
          color={selectedTemperatureSensitivity === 0 ? 'primary' : 'light'}
        />
        <Button
          children="추위를 타요"
          onClick={() => setSelectedTemperatureSensitivity(1)}
          color={selectedTemperatureSensitivity === 1 ? 'primary' : 'light'}
        />
      </div>
    </div>
  );
};

export default OutfitSection;
