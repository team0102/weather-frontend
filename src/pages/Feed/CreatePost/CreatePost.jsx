import { useEffect, useState } from 'react';
import IconButton from '../../../components/IconButton/IconButton';
import TextArea from '../../../components/TextArea/TextArea';
import './CreatePost.scss';

const CreatePost = ({ setIsModalOpen }) => {
  const [postContent, setPostContent] = useState('');
  const [userInfo] = useState({
    profileImg: '../../weather/images/TestImg/profile.png',
    nickname: 'heywoo',
  });

  useEffect(() => {
    const esc = e => {
      if (e.key === 'Escape') {
        cancelPost();
      }
    };

    window.addEventListener('keydown', esc);

    return () => {
      window.removeEventListener('keydown', esc);
    };
  }, []);

  const handleContentChange = e => {
    setPostContent(e.target.value);
  };

  const cancelPost = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="postWrap">
      <div className="postDim" onClick={cancelPost} />
      <form className="postCreation">
        <fieldset>
          <div className="postHeader">
            <IconButton content="X" size="md" onClick={cancelPost}>
              닫기
            </IconButton>
            <div
              className={
                postContent.length > 0
                  ? 'postCreationButton '
                  : 'postCreationButton disabled'
              }
            >
              등록
            </div>
          </div>
          <div className="feedUserInfo">
            <div className="feedProfile">
              <img src-={userInfo.profileImg} alt="프로필이미지" />
            </div>
            <div className="nickBox">
              <span>{userInfo.nickname}</span>
            </div>
          </div>
          <div className="postWriter">
            <TextArea
              rows={8}
              value={postContent}
              onChange={handleContentChange}
              placeholder="오늘 입은 옷을 자랑해보세요"
            />
          </div>
          <div className="postFooter">
            <div className="uploadImage">
              <img
                src-="../../../weather/images/Feed/feedCameraIcon.png"
                alt="이미지올리기"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePost;
