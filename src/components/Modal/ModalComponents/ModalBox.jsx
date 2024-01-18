import { useEffect } from 'react';
import './ModalBox.scss';

/**
 * Modal props list
 *@property {children} children              - 모달의 마크업 컴포넌트를 children 전달 받습니다.
 *@property {boolean}  isModalOpen           - 부모의 정의되어있는 isModalOpen // useState 값을 전달받습니다. (모든파일 name이 동일해야합니다.)
 *@property {function} setIsModalOpen        - 부모의 정의되어있는 setIsModalOpen //useState(set함수)를 전달받습니다.(모든파일 name이 동일해야합니다.)
 *@property {function} handleModalToggle     - 부모의 정의되어있는 handleModalToggle 토글함수를 전달받습니다. (모든파일 name이 동일해야합니다.)
 */

//모달에 대한 스타일은 아직 기획단계라 완성되지 않았습니다.

const ModalBox = ({
  children,
  isModalOpen,
  setIsModalOpen,
  handleModalToggle,
}) => {
  /** Modal이 Open 상태면 body의 scroll을 숨깁니다. */
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    /** esc키가 눌리면 close 함수 실행 */
    const close = e => {
      if (e.keyCode === 27) {
        setIsModalOpen(false);
      }
    };

    /** key 이벤트를 감지하여 close 함수를 실행함. */
    window.addEventListener('keydown', close);

    /** 메모리 누수 방지를 위하여 함수 실행 후 해당 이벤트 삭제 */
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);

  return (
    <>
      {isModalOpen && (
        <div onClick={handleModalToggle} className="modalWrap">
          <section
            className="modalInner"
            onClick={event => event.stopPropagation()}
          >
            <div className="modalCloseBtnInner">
              <button onClick={handleModalToggle}>닫기</button>
            </div>

            <div className="modalContentWrap">{children}</div>
          </section>
        </div>
      )}
    </>
  );
};

export default ModalBox;
