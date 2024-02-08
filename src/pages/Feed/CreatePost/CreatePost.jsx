import { useEffect, useState } from 'react';
import TextArea from '../../../components/TextArea/TextArea';
import './CreatePost.scss';
import IconButton from '../../../components/IconButton/IconButton';

const CreatePost = ({ setIsModalOpen }) => {
  const [postContent, setPostContent] = useState('');

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
              {/* <img src={author.profileImage} alt={`${author.id}프로필이미지`} /> */}
              <img
                src-="../../../weather/images/TestImg/profile.png"
                alt="프로필이미지"
              />
            </div>
            <div className="nickBox">
              {/* <span className="feedNick">{author.nickname}</span> */}
              <span>heywoo</span>
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
