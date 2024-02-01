import React, { useState, useEffect } from 'react';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageRow from './components/ImageRow/ImageRow';
import Button from '../../../../components/Button/Button';

import './FeedSection.scss';
import FeedModal from './components/FeedModal/FeedModal';

const NUM_COLUMNS = 3;
const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index,index+size)]) : carry, []);

const FeedSection = () => {
  const [feeds, setFeeds] = useState([]);

  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState();

  useEffect(() => {
    const requestFeeds = async () => {
      try {
        const response = await customAxios.get(API.FEEDS);
        setFeeds(response.data);
      } catch (error) {
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
    console.log(e.target.key);
    const feedId = parseInt(e.target.id);
    const filtered = feeds.filter(feed => feed.feedId == feedId);
    if (filtered.length === 1) {
      handleFeedModalToggle(filtered[0]);
    }
  };

  const handleFeedModalToggle = (feed) => {
    setSelectedFeed(feed);
    setIsFeedModalOpen(!isFeedModalOpen);
  };

  return (
    <div className="feedSection">
      {chunk(feeds, NUM_COLUMNS).map((feedsChunk, index) => {
        return <ImageRow key={index} numColumns={NUM_COLUMNS} feeds={feedsChunk} onTileClick={onTileClick} />;
      })}
      <div className="feedSectionFooter">
        <Button
          onClick={requestMoreFeeds}
          color="light"
          children="피드 더 보기"
        />
      </div>
      {
        isFeedModalOpen && <FeedModal 
          isModalOpen={isFeedModalOpen}
          setIsModalOpen={setIsFeedModalOpen}
          handleModalToggle={handleFeedModalToggle}
          feed={selectedFeed}
        />
      }
    </div>
  );
};

export default FeedSection;
