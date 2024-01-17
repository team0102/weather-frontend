import React from 'react';
import Portal from '../Portal/Portal';
import ModalBox from './ModalComponents/ModalBox';
import TestModalContent from './ModalContent/TestModalContent'; //1. 모달에 내용을 결정할 content를 import합니다.

const TestModal = (isModalOpen, setIsModalOpen, handleModalToggle) => {
  return (
    <Portal>
      <ModalBox
        content={<TestModalContent />} //2. 모달안에 들어갈 마크업된 컴포넌트 자체를 props로 전달합니다.
        isModalOpen={isModalOpen} // 모달을 호출한 부모에서 전달받아야합니다.
        setIsModalOpen={setIsModalOpen} // 모달을 호출한 부모에서 전달받아야합니다.
        handleModalToggle={handleModalToggle}
      />
    </Portal>
  );
};

export default TestModal;
