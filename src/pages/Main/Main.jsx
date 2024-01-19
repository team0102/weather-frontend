import { useState } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import './Main.scss';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.

const Main = () => {
  return (
    <main className="main">
      <IconButton onClick={() => console.log(111)} color='secondary' size='xlg' content="Home" />
      <IconButton onClick={() => console.log(111)} color='secondary' size='xlg' content="Feed" />
      <IconButton onClick={() => console.log(111)} color='secondary' size='xlg' content="Chat" />
      <IconButton onClick={() => console.log(111)} color='secondary' size='xlg' content="Comment" />
    </main>
  );
};

export default Main;
