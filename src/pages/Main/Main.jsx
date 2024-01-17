import { useState } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import './Main.scss';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.
import { ReactComponent as Icon } from '../../svg/Global/Hamburger.svg';

const Main = () => {
  console.log(Icon)
  return (
    <main className="main">
      <IconButton Icon={Icon} text='Menu' isInactive={true} onClick={() => console.log(111)} contentColor={'blue'} iconWidth={'90px'} />
    </main>
  );
};

export default Main;
