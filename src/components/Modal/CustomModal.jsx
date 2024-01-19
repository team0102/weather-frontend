import Portal from '../Portal/Portal';
import ModalBox from './ModalComponents/ModalBox';
import TestModalComponent from './ModalContent/TestModalContent'; //예시 1.모달의 마크업 컴포넌트를 import해서 children에 전달해줍니다.
/**
 * CustomModal props list
 *@property {boolean} isModalOpen            - 부모의 정의되어있는 isModalOpen // useState(블리언값) 값을 전달받습니다. (부모와 name이 동일해야합니다.)
 *@property {function} setIsModalOpen        - 부모의 정의되어있는 setIsModalOpen //useState(set함수)를 전달받습니다.(부모와 name이 동일해야합니다.)
 *@property {function} handleModalToggle     - 부모의 정의되어있는 handleModalToggle 토글함수를 전달받습니다. (부모와 name이 동일해야합니다.)
 */

const CustomModal = ({ isModalOpen, setIsModalOpen, handleModalToggle }) => {
  return (
    <Portal>
      <ModalBox
        children={<TestModalComponent />} //2. 모달안에 들어갈 마크업된 컴포넌트 자체를 props로 전달합니다.
        isModalOpen={isModalOpen} // 모달을 호출한 부모에서 전달 받아야 합니다.
        setIsModalOpen={setIsModalOpen} // 모달을 호출한 부모에서 전달 받아야 합니다.
        handleModalToggle={handleModalToggle} //토글할 함수는 부모에서 전달 받아야 합니다.
      />
    </Portal>
  );
};

export default CustomModal;
