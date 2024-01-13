import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import Portal from '../../components/Portal/Portal';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.

const Main = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const toggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <main className="main">
      <button onClick={toggleClick}> 네브바 나와</button>
      {/* <h1>Weather-Project 시작</h1> */}

      {toggle && (
        <Portal>
          <Nav setToggle={setToggle} />
        </Portal>
      )}
    </main>
  );
};

export default Main;
