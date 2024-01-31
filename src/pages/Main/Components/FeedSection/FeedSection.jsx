import React, { useState, useEffect } from 'react';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageTile from '../ImageTile/ImageTile';

import './FeedSection.scss';

const FeedSection = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const requestFeeds = async () => {
      try {
        const response = await customAxios.get(API.FEEDS);
        console.log(response);
        setFeeds(prev => response.data);
      } catch (error) {
        alert('에러 발생');
      }
    };
    requestFeeds();
  }, []);

  console.log(feeds);
  return (
    <div className="feedSection">
      {feeds.map(feed => {
        return <ImageTile imageUrl={feed.imageUrl} />;
      })}
    </div>
  );
};

export default FeedSection;
