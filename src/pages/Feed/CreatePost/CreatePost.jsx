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
          <div>
            <div></div>
          </div>
          <div className="postWriter">
            <TextArea
              rows={8}
              value={postContent}
              onChange={handleContentChange}
              placeholder="오늘 입은 옷을 자랑해보세요"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePost;
