import ModalBox from '../../../../../../components/Modal/ModalComponents/ModalBox';
import Portal from '../../../../../../components/Portal/Portal';
import FeedModalContent from '../FeedModalContent/FeedModalContent';

const FeedModal = ({ isModalOpen, setIsModalOpen, handleModalToggle, feed }) => {
  return (
    <Portal>
      <ModalBox 
        children={<FeedModalContent feed={feed} ></FeedModalContent>}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleModalToggle={handleModalToggle}
      />
    </Portal>
  );
};

export default FeedModal;