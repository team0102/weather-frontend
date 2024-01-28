import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import Nav from '../../components/Nav/Nav';

import './Main.scss';
import SelectBox from '../../components/SelectBox/SelectBox';
import TestModal from '../../components/Modal/TestModal';
import TextArea from '../../components/TextArea/TextArea';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.
import { ReactComponent as Icon } from '../../svg/Global/Image.svg';

const Main = () => {
  //부모라고 가정한 모달에 필요한 함수,useState 입니다.
  const [isModalOpen, setIsModalOpen] = useState(false);
  //부모라고 가정한 모달에 필요한 함수,useState 입니다.
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  //부모라고 가정한 네브에 필요한 함수,useState 입니다.
  const [navToggle, setNavToggle] = useState(false);
  //부모라고 가정한 네브에 필요한 함수,useState 입니다.
  const toggleClick = () => {
    setNavToggle(!navToggle);
  };

  const [selected, setSelected] = useState(2);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/test');
  };

  return (
    <main className="main">
      {selected}
      <SelectBox
        options={{ 1: 'aaaa', 2: 'bbbb ' }}
        onChange={setSelected}
        selected={selected}
      />

      <IconButton
        onClick={() => console.log(111)}
        color="secondary"
        size="xlg"
        content="Home"
      />

      <Button
        size="md"
        color="primary"
        style="outline"
        isDisabled={false}
        onClick={() => console.log('clicked')}
      >
        Children
      </Button>
      <button onClick={toggleClick}>네브바 나와</button>
      <button onClick={handleModalToggle}>모달 나와</button>
      <button onClick={handleClick}>test</button>

      {isModalOpen && (
        <TestModal
          handleModalToggle={handleModalToggle} // 토글함수
          setIsModalOpen={setIsModalOpen} // useState 세터함수
          isModalOpen={isModalOpen} // useState 값
        />
      )}

      <TextArea
        placeholder="입력하세요"
        rows={3}
        onChange={e => console.log(e.target.value)}
      />

      <Nav
        navToggle={navToggle}
        setNavToggle={setNavToggle}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
};

export default Main;
