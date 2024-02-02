import React, {useState, useEffect} from 'react';
import './OutfitSection.scss';
import ImageRow from '../ImageRow/ImageRow';
import { API } from '../../../../../config';
import { customAxios } from '../../../../API/API';
import Button from '../../../../components/Button/Button';

const NUM_COLUMNS = 3;
const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index,index+size)]) : carry, []);

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

  console.log(clothes)
  return (
    <div className="outfitSection section">
      <div className="imageRowWrapper">
        {chunk(clothes, NUM_COLUMNS).map((chunk, index) => {
          console.log(chunk)
          return <ImageRow key={index} numColumns={NUM_COLUMNS} items={chunk} rounded={true} />;
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
