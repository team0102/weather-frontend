import React, { useState, useEffect, useCallback } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import './BookMark.scss';
import { API } from '../../../config';
import { customAxios } from '../../API/API';

const BookMark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [sliceNum, setSliceNum] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestBookMarks();
  }, []);

  const requestBookMarks = async () => {
    try {
      const request = await customAxios.get(API.BOOK_MARK_LIST);
      setBookmarks(request.data);
    } catch (error) {
      alert('북마크를 불러오던 중 에러가 발생했습니다');
    }
  };

  const handleBookMarkToggle = id => {
    console.log('Bookmark toggled:', id);
  };

  const loadMoreData = () => {
    if (loading) return; // 이미 로딩 중이면 실행하지 않음

    setLoading(true);
    setTimeout(() => {
      setSliceNum(sliceNum + 5);
      setLoading(false);
    }, 2000);
  };

  const handleScroll = useCallback(
    event => {
      const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
      // `scrollHeight - 100`으로 변경하여 사용자가 맨 아래에 도달하기 전에 함수가 호출되도록 설정
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreData();
      }
    },
    [loading, bookmarks],
  );
  // 스크롤 이벤트 리스너를 추가하는 useEffect
  useEffect(() => {
    const element = document.querySelector('.bookMarkWrap');
    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <main className="BookMark">
      <h2>Weather BookMark</h2>

      <section onScroll={handleScroll}>
        <ul className="bookMarkWrap">
          {bookmarks.slice(0, sliceNum).map(bookmark => (
            <li key={bookmark.id} className="bookMarkInner">
              <div className="ImgInner">
                <img src={bookmark.imageUrl} alt="피드이미지" />
              </div>

              <div className="feedWrap">
                <h3 className="feedUserId">{bookmark.nickName}</h3>
                <p className="feedContent">{bookmark.content}</p>

                <ul className="reactionWrap">
                  <li>
                    <span>좋아요 {bookmark.likeCount}개</span>
                  </li>

                  <li>
                    <span>댓글 {bookmark.commentCount}개</span>
                  </li>
                </ul>
              </div>

              <div className="bookMarkBtn">
                <IconButton
                  content="BookMarkA"
                  size="xlg"
                  onClick={() => handleBookMarkToggle(bookmark.id)}
                />
              </div>
            </li>
          ))}
        </ul>

        {loading && (
          <div className="LoadingWrap">
            <span>Loading more bookmarks...</span>
          </div>
        )}
      </section>
    </main>
  );
};
export default BookMark;
