import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import SelectBox from '../../components/SelectBox/SelectBox';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.

const Main = () => {
  const [selected, setSelected] = useState(0);
  return (
    <main className="main">
      {/* <h1>Weather-Project 시작</h1> */}
      {selected}
      <SelectBox content={{1: "aaaa", 2: "bbbb "}} onChange={setSelected} />
    </main>
  );
};

export default Main;
