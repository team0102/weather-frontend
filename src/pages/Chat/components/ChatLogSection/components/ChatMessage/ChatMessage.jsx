/**
 * ChatMessage props list
 *@property {string} id                                - ChatMessage 고유의 id 정의합니다.
 *@property {string} content                           - 메시지 내용
 *@property {string} createdAt                         - 메시지 작성 시간
 *@property {object} writer                            - 메시지를 작성한 사용자의 정보
 -------------------------------------------------------------------------------------------------
 * user key lists
 *@property {number} id                                - 메시지를 작성한 사용자의 id
 *@property {string} name                              - 메시지를 작성한 사용자의 이름/닉네임
 *@property {string} profileImageUrl?                  - 메시지를 작성한 사용자의 프로필 이미지
 */

import { useState } from 'react';
import IconButton from '../../../../../../components/IconButton/IconButton';

import './ChatMessage.scss';

const ChatMessage = ({ id, content, createdAt, writer }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userMenuPosition, setUserMenuPosition] = useState({ top: 0, left: 0 });
  const userId = 2; // TODO: to get user id from state

  const onClickUser = e => {
    console.log(e.target.id);
    setIsUserMenuOpen(!isUserMenuOpen);
    // TODO: 유저 클릭시 메뉴, 프로필보기, 팔로우, 신고 등
  };

  return (
    <div className={`chatMessage ${userId === writer.id ? 'myMessage' : ""}`}>
      {userId === writer.id ? null : (
        <div className="chatUser" id={id} onClick={onClickUser}>
          {writer.profileImageUrl ? (
            <img className="userProfile" src={writer.profileImageUrl} />
          ) : (
            <IconButton size="md" content="User" color="primary"></IconButton> // TODO: change to random color user icon
          )}
        </div>
      )}
      <div className="chatTextArea">
        <span className="chatUserName">{writer.name}</span>
        <div className="chatMessageContent">{content}</div>
        <div className="chatMessageTime">{createdAt.slice(11)}</div>
      </div>
      {isUserMenuOpen ? (
        <div className="userMenu" style={userMenuPosition}>
          userMEnu
        </div>
      ) : null}
    </div>
  );
};

export default ChatMessage;
