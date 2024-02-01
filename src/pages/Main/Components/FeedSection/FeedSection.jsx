import React, { useState, useEffect } from 'react';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageRow from './components/ImageRow/ImageRow';
import Button from '../../../../components/Button/Button';

import './FeedSection.scss';

const NUM_COLUMNS = 3;
const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index,index+size)]) : carry, []);

const FeedSection = () => {
  const [feeds2DArray, setFeeds2DArray] = useState([[]]);

  useEffect(() => {
    const requestFeeds = async () => {
      try {
        const response = await customAxios.get(API.FEEDS);
        const rawData = response.data;
        const dataAs2DArray = chunk(rawData, NUM_COLUMNS);
        // const dataAs2DArray = [];
        // for (let i = 3; i < response.data.length; i += 3) {
        //   dataAs2DArray.push(rawData.slice(i - 3, i));
        // }

        setFeeds2DArray(dataAs2DArray);
      } catch (error) {
        console.log(error);
        alert('에러 발생');
      }
    };
    requestFeeds();
  }, []);

  const requestMoreFeeds = async () => {
    console.log('피드 더 보기');
    // TODO: 추가 피드 불러오는 기능 구현
  };

  const onTileClick = e => {
    console.log(e.target.id);
    // TODO: 모달 여는 기능 구현
  };

  console.log(feeds2DArray);
  return (
    <div className="feedSection">
      {feeds2DArray.map((feeds, index) => {
        return <ImageRow key={index} numColumns={NUM_COLUMNS} feeds={feeds} onTileClick={onTileClick} />;
      })}
      <div className="feedSectionFooter">
        <Button
          onClick={requestMoreFeeds}
          color="light"
          children="피드 더 보기"
        />
      </div>
    </div>
  );
};

export default FeedSection;
