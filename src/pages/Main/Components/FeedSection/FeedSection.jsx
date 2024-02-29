import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageRow from './components/ImageRow/ImageRow';
import Button from '../../../../components/Button/Button';

import './FeedSection.scss';
import IconButton from '../../../../components/IconButton/IconButton';

const NUM_COLUMNS = 3;
const FEED_REQUEST_COUNTS = 0;
const chunk = (arr, size) =>
  arr.reduce(
    (carry, _, index, orig) =>
      !(index % size) ? carry.concat([orig.slice(index, index + size)]) : carry,
    [],
  );

const FeedSection = () => {
  const [feeds, setFeeds] = useState([]);
  const feedRequestCounts = useRef(FEED_REQUEST_COUNTS);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (feedRequestCounts.current === FEED_REQUEST_COUNTS) requestFeeds();
  }, []);
  
  const requestFeeds = useCallback(async (lastId = 0) => {
    feedRequestCounts.current++;
    try {
      setIsLoading(prev => true);
      const response = await customAxios.get(API.FEEDS, {
        params: {
          take: 15,
          where__id__more_than: lastId,
          order__createdAt: 'DESC',
        },
      });
      setFeeds(prev => [
        ...prev,
        ...response.data.data.map(feed => ({ ...feed, id: feed.feedId })),
      ]);
      setIsLoading(prev => false);
    } catch (error) {
      console.log(error);
      setIsLoading(prev => false);
      feedRequestCounts.current --;
    }
  }, []);

  const requestMoreFeeds = useCallback(async () => {
    // TODO: 무한스크롤 적용 여부 확인, 피드 얼마나 보여줄 것인지 확인
    if (feedRequestCounts.current < 3) {
      const lastId = feeds.pop().id;
      requestFeeds(lastId);
    } else {
      navigate('/feed');
    }
  }, [feeds]);

  return (
    <div className="feedSection section">
      <div className="imageRowWrapper">
        {chunk(feeds, NUM_COLUMNS).map((feedsChunk, index) => {
          console.log(feedsChunk);
          return (
            <ImageRow key={index} numColumns={NUM_COLUMNS} items={feedsChunk} />
          );
        })}
      </div>
      <div className="feedSectionFooter">
        {isLoading ? (
          <IconButton content={'Loader'} color={'gray'}></IconButton>
        ) : (
          <Button
            onClick={requestMoreFeeds}
            color="light"
            children="피드 더 보기"
          />
        )}
      </div>
    </div>
  );
};

export default FeedSection;
