import { useEffect, useState } from 'react';
import { customAxios } from '../../API/API';
import { API } from '../../../config';
import IconButton from '../../components/IconButton/IconButton';
import Input from '../../components/Input/Input';
import './Feed.scss';

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    requestFeedList();
  }, []);

  const requestFeedList = async () => {
    try {
      const response = await customAxios.get(API.FEED_DATA);
      console.log(response);
      if (response.data.statusCode === 200) {
        setFeedList(response.data.data);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('에러 발생 :', error.message);
    }
  };

  const handleExpand = () => {
    setIsShowMore(true);
  };

  const truncateContent = content =>
    content.length > 25 ? `${content.substring(0, 25)}...` : content;

  return (
    <main className="main">
      <section className="feedWrap">
        <div className="postCreation">
          <Input placeholder="글쓰기" />
        </div>
        {feedList.map(item => (
          <article key={item.feedId}>
            <div className="feedTop">
              <div className="topLeft">
                <div className="feedProfile">
                  <img
                    src={item.profileImage}
                    alt={`${item.authorId}프로필이미지`}
                  />
                </div>
                <div className="nickBox">
                  <span className="feedNick">{item.nickName}</span>
                  <span className="feedDate">
                    {new Date(item.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="topRight">
                <span>{item.lowTemperature}</span>/
                <span>{item.highTemperature}</span>
                <span>더보기</span>
              </div>
            </div>

            <div className="feedMid">
              <img src={item.imageUrl} alt={`${item.feedId}피드이미지`} />
            </div>

            <div className="feedBtm">
              <div className="feedIconWrap">
                <div className="feedIconLeft">
                  <IconButton content="Like" size="lg" />
                  <IconButton content="CommentRound" size="lg" />
                </div>
                <IconButton content="Bookmark" size="lg" />
              </div>

              <div className="feedLikes">
                좋아요&nbsp;
                <span>{item.likeCount}</span>개
              </div>

              <div className="feedContentWrap">
                <div className="feedUser">
                  <span>{item.nickName}</span>
                </div>
                <div className="feedContentBox">
                  <span className="feedContent expand">
                    {isShowMore ? item.content : truncateContent(item.content)}
                  </span>
                  {item.content.length > 25 && !isShowMore && (
                    <span className="more" onClick={handleExpand}>
                      더보기
                    </span>
                  )}
                </div>
              </div>

              <div className="commentCount">
                댓글&nbsp;<span>{item.commentCount}</span>개 모두 보기
              </div>
              <div className="commentBox">
                <Input placeholder="댓글을 남겨주세요" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Feed;
