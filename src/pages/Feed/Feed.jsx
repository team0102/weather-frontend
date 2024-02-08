import { useEffect, useState } from 'react';
import { customAxios } from '../../API/API';
import { API } from '../../../config';
import IconButton from '../../components/IconButton/IconButton';
import CreatePost from './CreatePost/CreatePost';
import Input from '../../components/Input/Input';
import './Feed.scss';

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo] = useState({
    profileImg: '../../weather/images/TestImg/profile.png',
  });

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

  const handleExpand = id => {
    setIsShowMore(prevShowMore => ({
      ...prevShowMore,
      [id]: true,
    }));
  };

  const handleCreatePost = () => {
    setIsModalOpen(true);
  };

  // 내용을 28자까지만 띄움
  const truncateContent = content =>
    content.length > 28 ? `${content.substring(0, 28)} ...` : content;

  return (
    <main className="main">
      <section className="feedWrap">
        <article className="postCreationWrap">
          <div className="postCreationBox">
            <div className="feedUserInfo">
              <div className="feedProfile">
                <img src-={userInfo.profileImg} alt="프로필이미지" />
              </div>
            </div>
            <div className="createPostButton" onClick={handleCreatePost}>
              <span>오늘은 무슨 일이 있었나요</span>
            </div>
          </div>
        </article>
        {feedList.map(item => (
          <article key={item.id}>
            <div className="feedTop">
              <div className="feedUserInfo">
                <div className="feedProfile">
                  <img
                    src={item.author.profileImage}
                    alt={`${item.author.id}프로필이미지`}
                  />
                </div>
                <div className="nickBox">
                  <span className="feedNick">{item.author.nickname}</span>
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
              <img src={item.imageUrl} alt={`${item.id}피드이미지`} />
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
                  <span>{item.author.nickname}</span>
                </div>
                <div className="feedContentBox">
                  <span className="feedContent expand">
                    {isShowMore[item.id]
                      ? item.content
                      : truncateContent(item.content)}
                  </span>
                  {item.content.length > 28 && !isShowMore[item.id] && (
                    <span
                      className="more"
                      onClick={() => handleExpand(item.id)}
                    >
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
        {isModalOpen && <CreatePost setIsModalOpen={setIsModalOpen} />}
      </section>
    </main>
  );
};

export default Feed;
