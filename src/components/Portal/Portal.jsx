// react-dom 패키지에서 createPortal method를 가져옴
import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  // dom에서 portal라는 id를 가진 요소를 찾아 el로 정의 (el: element)
  const el = document.getElementById('portal');
  // createPortal 메서드를 사용하여 modal 안에 있는 children을 el의 위치에서 렌더링
  return ReactDom.createPortal(children, el);
};

export default Portal;
