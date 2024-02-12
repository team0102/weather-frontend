import React from 'react';
import IconButton from '../../../components/IconButton/IconButton';

const MyActivity = () => {
  return (
    <section className="myActivityWrap">
      <h3>내 활동</h3>

      <ul className="activityWrap">
        <li className="activityItemInner">
          <div className="activityItem">
            <IconButton content="CommentRound" size="lg"></IconButton>
            <label>댓글수</label>
          </div>

          <span>30개</span>
        </li>

        <li className="activityItemInner">
          <div className="activityItem">
            <IconButton content="Bookmark" size="lg"></IconButton>
            <label>게시물수</label>
          </div>

          <span>18개</span>
        </li>

        <li className="activityItemInner">
          <div className="activityItem">
            <IconButton content="Follower" size="lg"></IconButton>
            <label>팔로워수</label>
          </div>

          <span>200명</span>
        </li>
      </ul>
    </section>
  );
};

export default MyActivity;
