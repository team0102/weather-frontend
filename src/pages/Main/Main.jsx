import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import Input from '../../components/Input/Input';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.

const Main = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <main className="main">
      <button onClick={toggleClick}>네브바 나와</button>
      {/* <h1>Weather-Project 시작</h1> */}
      <Input />
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
    </main>
  );
};

export default Main;
