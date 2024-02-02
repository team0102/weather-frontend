import React, {useState, useEffect} from 'react';
import './OutfitSection.scss';
import { API } from '../../../../../config';
import { customAxios } from '../../../../API/API';
import Button from '../../../../components/Button/Button';
import OutfitIcon from './components/OutfitIcon/OutfitIcon';

const OutfitSection = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const requestClothes = async () => {
      try {
        const response = await customAxios.get(API.CLOTHES);
        const {id, ...data} = response.data[0];
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
      <div className="suggestionMessage">
        {/* TODO: 날씨에 따른 문구 변경 로직 */}
        오늘 날씨에는 이렇게 입어보세요~!
      </div>
      <div className="imageRowWrapper">
        {clothes.map((clothes, index) => {
          return <OutfitIcon key={index} imageUrl={clothes.imageUrl} />
        })}
      </div>
      <div className="personalizeWindChill">
        <Button children="더위를 타요" />
        <Button children="보통이예요" />
        <Button children="추위를 타요" />
      </div>
    </div>
  );
};

export default OutfitSection;
