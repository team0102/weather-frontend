import './Feed.scss';
import IconButton from '../../components/IconButton/IconButton';
import Input from '../../components/Input/Input';

const Feed = () => {
  return (
    <main className="main">
      <section className="feedWrap">
        <div className="postCreation">
          <Input placeholder="글쓰기" />
        </div>

        <article>
          <div className="feedTop">
            <div className="topLeft">
              <div className="feedProfile">
                <img
                  src="../../weather/images/TestImg/profile.png"
                  alt="프로필이미지"
                />
              </div>
              <div className="nickBox">
                <span className="feedNick">닉네임</span>
                <span className="feedDate">날짜</span>
              </div>
            </div>
            <div className="topRight">
              <span>날씨</span>
              <span>더보기</span>
            </div>
          </div>

          <div className="feedMid">
            <img
              src="../../weather/images/TestImg/profile.png"
              alt="피드이미지"
            />
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
              <span>20</span>개
            </div>

            <div className="feedContentWrap">
              내용
              <div className="feedUser">
                <span>아이디</span>
              </div>
              <span className="feedContentToggle">내용 ...더보기</span>
            </div>

            <div className="commentCount">
              댓글&nbsp;<span>10</span>개 모두 보기
            </div>
            <div className="">
              <Input placeholder="댓글을 남겨주세요" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Feed;
