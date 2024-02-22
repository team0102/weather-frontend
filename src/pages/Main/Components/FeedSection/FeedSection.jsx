import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import ImageRow from './components/ImageRow/ImageRow';
import Button from '../../../../components/Button/Button';

import './FeedSection.scss';
import IconButton from '../../../../components/IconButton/IconButton';

const NUM_COLUMNS = 3;
const chunk = (arr, size) =>
  arr.reduce(
    (carry, _, index, orig) =>
      !(index % size) ? carry.concat([orig.slice(index, index + size)]) : carry,
    [],
  );

const FeedSection = () => {
  const [feeds, setFeeds] = useState([]);
  const feedRequestCounts = useRef(1);
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const requestFeeds = async () => {
      setIsLoding(true);
      try {
        const response = await customAxios.get(API.FEEDS, {
          params: { take: 15 },
        });
        setFeeds(response.data.map(feed => ({ ...feed, id: feed.feedId })));
      } catch (error) {
        alert('에러 발생');
      } finally {
        setIsLoding(false);
      }
    };
    requestFeeds();
  }, []);

  const requestMoreFeeds = async () => {
    console.log('피드 더 보기');
    // TODO: 무한스크롤 적용 여부 확인, 피드 얼마나 보여줄 것인지 확인
    if (feedRequestCounts.current < 3) {
      setIsLoding(true);
      try {
        const response = await customAxios.get(API.FEEDS, {
          params: {
            take: 15,
            where__id__more_than: feeds.pop().id + 1,
            order__createdAt: 'DESC',
          },
        });
        setFeeds(prev => [
          ...prev,
          ...response.data.map(feed => ({ ...feed, id: feed.feedId })),
        ]);
        feedRequestCounts.current ++;
      } catch (error) {
        alert('에러 발생');
      } finally {
        setIsLoding(false);
      }
    } else {
      navigate('/feed');
    }
  };

  return (
    <div className="feedSection section">
      <div className="imageRowWrapper">
        {chunk(feeds, NUM_COLUMNS).map((feedsChunk, index) => {
          return (
            <ImageRow key={index} numColumns={NUM_COLUMNS} items={feedsChunk} />
          );
        })}
      </div>
      <div className="feedSectionFooter">
        {
          isLoding ? 
          <IconButton content={'Loader'} color={'gray'}></IconButton>
          :
          <Button
            onClick={requestMoreFeeds}
            color="light"
            children="피드 더 보기"
          />
        }
      </div>
    </div>
  );
};

export default FeedSection;
