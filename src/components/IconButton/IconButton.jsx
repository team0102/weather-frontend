import './IconButton.scss';
/**
 * IconButton props list
 * @property {JSX.Element} icon                            - 아이콘 버튼에 표시 할 아이콘 컴포넌트
 * @property {function} onClick                            - 버튼 클릭 시 실행할 동작을 정의한 함수
 */

const IconButton = ({
  icon,
  onClick,
}) => {
  return (
    <button className="iconButton" onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;