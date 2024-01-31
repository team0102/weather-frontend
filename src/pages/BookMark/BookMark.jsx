import IconButton from '../../components/IconButton/IconButton';
import './BookMark.scss';

const BookMark = () => {
  const handleBookMarkToggle = () => {
    setBookMarkToggle(!bookMarkToggle);
  };

  return (
    <main className="BookMark">
      <h2>Weather BookMark</h2>

      <section>
        <ul className="bookMarkWrap">
          <li className="bookMarkInner">
            <div className="ImgInner">
              <img
                src="../../weather/images/TestImg/profile.png"
                alt="피드이미지"
              />
            </div>

            <div className="feedWrap">
              <h3 className="feedUserId">WeatherAdmin</h3>

              <p className="feedContent">
                내용은 넘어가면안보여야 합니다. 내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.
              </p>

              <div className="reactionWrap">
                <span>좋아요 20개</span>
                <span>댓글 43개</span>
              </div>
            </div>

            <div className="bookMarkBtn">
              <IconButton
                content="BookMarkA"
                size="xlg"
                onClick={handleBookMarkToggle}
              />
            </div>
          </li>

          <li className="bookMarkInner">
            <div className="ImgInner">
              <img
                src="../../weather/images/TestImg/profile.png"
                alt="피드이미지"
              />
            </div>

            <div className="feedWrap">
              <h3 className="feedUserId">WeatherAdmin</h3>

              <p className="feedContent">
                내용은 넘어가면안보여야 합니다. 내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.
              </p>

              <div className="reactionWrap">
                <span>좋아요 20개</span>
                <span>댓글 43개</span>
              </div>
            </div>

            <div className="bookMarkBtn">
              <IconButton
                content="BookMarkA"
                size="xlg"
                onClick={handleBookMarkToggle}
              />
            </div>
          </li>

          <li className="bookMarkInner">
            <div className="ImgInner">
              <img
                src="../../weather/images/TestImg/profile.png"
                alt="피드이미지"
              />
            </div>

            <div className="feedWrap">
              <h3 className="feedUserId">WeatherAdmin</h3>

              <p className="feedContent">
                내용은 넘어가면안보여야 합니다. 내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.
              </p>

              <div className="reactionWrap">
                <span>좋아요 20개</span>
                <span>댓글 43개</span>
              </div>
            </div>

            <div className="bookMarkBtn">
              <IconButton
                content="BookMarkA"
                size="xlg"
                onClick={handleBookMarkToggle}
              />
            </div>
          </li>

          <li className="bookMarkInner">
            <div className="ImgInner">
              <img
                src="../../weather/images/TestImg/profile.png"
                alt="피드이미지"
              />
            </div>

            <div className="feedWrap">
              <h3 className="feedUserId">WeatherAdmin</h3>

              <p className="feedContent">
                내용은 넘어가면안보여야 합니다. 내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.내용은 넘어가면안보여야 합니다.내용은 넘어가면안보여야
                합니다.
              </p>

              <div className="reactionWrap">
                <span>좋아요 20개</span>
                <span>댓글 43개</span>
              </div>
            </div>

            <div className="bookMarkBtn">
              <IconButton
                content="BookMarkA"
                size="xlg"
                onClick={handleBookMarkToggle}
              />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default BookMark;
