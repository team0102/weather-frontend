import Portal from '../Portal/Portal';
import ModalBox from './ModalComponents/ModalBox';
import TestModalComponent from './ModalContent/TestModalContent';

/**
 * UseModal props list
 *@property {Component} content              - 모달의 마크업 컴포넌트를 content 전달 받습니다.
 *@property {Hook} isModalOpen               - 부모의 정의되어있는 isModalOpen // useState 값을 전달받습니다. (모든 name이 동일해야합니다.)
 *@property {function} setIsModalOpen        - 부모의 정의되어있는 setIsModalOpen //useState(set함수)를 전달받습니다.(모든 name이 동일해야합니다.)
 */

const UseModal = (isModalOpen, setIsModalOpen) => {
  return (
    <Portal>
      <ModalBox
        content={<TestModalComponent />}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Portal>
  );
};

export default UseModal;
