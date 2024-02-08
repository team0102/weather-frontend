import React, { useState, useEffect, useCallback } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import { API } from '../../../config';
import { customAxios } from '../../API/API';
import './BookMark.scss';

const BookMark = () => {
  /** 북마크리스트를 담는 useState 정의합니다. */
  const [bookmarks, setBookmarks] = useState([]);
  /** 북마크리스트를 보여줄 북마크 데이터 아이템 개수를 useState 정의합니다. */
  const [sliceNum, setSliceNum] = useState(12);
  /** 로딩 마크업을 관리하는 useState 정의합니다. */
  const [loading, setLoading] = useState(false);
  /** 이전 스크롤 위치값 useState 정의합니다. */
  const [lastScrollTop, setLastScrollTop] = useState(0);

  /** 컴포넌트가 마운트될 때 한 번만 실행되는 `useEffect` 훅입니다.
   * 1.마운트가 된다면 북마크 데이터를 불러오는 함수를 실행합니다.
   */
  useEffect(() => {
    requestBookMarks();
  }, []);

  /** 북마크 리스트 데이터를 불러오는 axios 함수입니다. */
  const requestBookMarks = async () => {
    try {
      const request = await customAxios.get(API.BOOK_MARK_LIST);
      setBookmarks(request.data);
    } catch (error) {
      alert('북마크를 불러오던 중 에러가 발생했습니다');
    }
  };

  /** 북마크 버튼 클릭시 북마크 아이템에 id를 인자로 받아 실행하는 함수입니다. */
  //추후 북마크 취소시 사용함수
  const handleBookMarkToggle = id => {
    alert(`${id}번 게시물을 북마크리스트에서 삭제했습니다.`);
    console.log(id);
  };

  const loadMoreData = () => {
    // 1.로딩중 이라면 리턴합니다.
    if (loading) return;
    // 2. 로딩중이 아니라면 로딩을 표하시하기위해 블리언값을 true로 반전합니다.
    setLoading(true);
    setTimeout(() => {
      // 3.스크롤이벤시 나타날 기존 게시물 아이템개수에 +5개를 추가합니다.
      setSliceNum(sliceNum + 5);
      // 4.완료되면 로딩 마크업을 false로 반전합니다.
      setLoading(false);
    }, 2000); // 2초타임 셋을 세팅합니다.
  };

  // `useCallback` 훅을 사용하여 `handleScroll` 함수를 메모이제이션합니다.
  // 이 함수는 스크롤 이벤트가 발생할 때마다 호출됩니다.
  const handleScroll = useCallback(
    event => {
      // `event.currentTarget`에서 스크롤 관련 속성을 추출합니다.
      const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

      // 스크롤 방향이 아래로 이동하는지 확인합니다. (이전 스크롤 위치보다 큰 경우)
      const isScrollingDown = scrollTop > lastScrollTop;

      // 스크롤 위치(`scrollTop`)와 뷰포트 높이(`clientHeight`)의 합이
      // 스크롤 가능한 총 높이(`scrollHeight`)에서 100px을 뺀 값보다 크거나 같을 때
      // 즉, 스크롤이 거의 끝에 도달했을 때 `loadMoreData` 함수를 호출합니다.
      if (isScrollingDown && scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreData();

        // 현재 스크롤 위치를 저장합니다.
        setLastScrollTop(scrollTop);
      }
    },
    [loading, bookmarks, lastScrollTop],
  );

  // 컴포넌트가 마운트될 때 한 번만 실행되는 `useEffect` 훅입니다.
  useEffect(() => {
    // `.bookMarkWrap` 클래스를 가진 요소를 선택합니다.
    const element = document.querySelector('.bookMarkWrap');

    // 해당 요소에 'scroll' 이벤트 리스너를 추가합니다. 이 리스너는 위에서 정의한 `handleScroll` 함수입니다.
    element.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 실행됩니다.
    // 메모리 누수를 방지하기 위해 이벤트 리스너를 제거합니다.
    return () => element.removeEventListener('scroll', handleScroll);

    // `handleScroll` 함수가 변경될 때마다 이 이펙트를 재실행하여 이벤트 리스너를 업데이트합니다.
    // 이는 `handleScroll` 함수가 `loading`이나 `bookmarks`에 의존하기 때문입니다.
  }, [handleScroll]);

  return (
    <main className="BookMark">
      <h2>Weather BookMark</h2>

      <section onScroll={handleScroll}>
        <ul className="bookMarkWrap">
          {bookmarks.length === 0 ? ( // bookmarks 데이터 배열의 길이가 0인지 확인합니다.
            <li className="NoBookMarksMessage">
              <h3>북마크한 리스트가 없습니다.</h3>
            </li>
          ) : (
            bookmarks
              .slice(0, sliceNum)
              .map(
                ({
                  id,
                  imageUrl,
                  nickName,
                  content,
                  likeCount,
                  commentCount,
                }) => (
                  <li key={id} className="bookMarkInner">
                    <div className="ImgInner">
                      <img src={imageUrl} alt="피드이미지" />
                    </div>

                    <div className="feedWrap">
                      <>
                        <h3 className="feedUserId">{nickName}</h3>
                        <p className="feedContent">{content}</p>
                      </>

                      <ul className="reactionWrap">
                        <li>
                          <span>좋아요 {likeCount}개</span>
                        </li>

                        <li>
                          <span>댓글 {commentCount}개</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bookMarkBtn">
                      <IconButton
                        content="BookMarkA"
                        size="xlg"
                        onClick={() => handleBookMarkToggle(id)}
                      />
                    </div>
                  </li>
                ),
              )
          )}
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
