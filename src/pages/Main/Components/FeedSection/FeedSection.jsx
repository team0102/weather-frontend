import React, { useState, useEffect } from 'react';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageRow from './components/ImageRow/ImageRow';
import Button from '../../../../components/Button/Button';

import './FeedSection.scss';

const FeedSection = () => {
  const [feeds, setFeeds] = useState([[]]);

  useEffect(() => {
    const requestFeeds = async () => {
      try {
        const response = await customAxios.get(API.FEEDS);
        const rawData = response.data;
        const feeds2DList = [];
        for (let i = 3; i < response.data.length ; i += 3) {
          feeds2DList.push(rawData.slice(i-3, i));
        };
        
        setFeeds(feeds2DList);
      } catch (error) {
        console.log(error)
        alert('에러 발생');
      }
    };
    requestFeeds();
  }, []);

  const requestMoreFeeds = async () => {
    console.log("피드 더 보기");
  }

  console.log(feeds);
  return (
    <div className="feedSection">
      {feeds.map(feed => {
        return <ImageRow feeds={feed} />;
      })}
      <div className="feedSectionFooter">
        <Button onClick={requestMoreFeeds} color="light" children="피드 더 보기" />
      </div>
    </div>
  );
};

export default FeedSection;
