import './IconButton.scss';
/**
 * IconButton props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 아이콘 버튼의 타입을 지정
 * @property {ReactComponent} Icon                                                         - 아이콘 버튼에 표시 할 아이콘 컴포넌트
 * @property {function} onClick                                                            - 아이콘 버튼 클릭 시 실행할 동작을 정의한 함수
 * @property {string} size: 'sm', 'md', 'lg'                                               - 아이콘 버튼 텍스트의 두께를 지정
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'gray', 'dark'   - 아이콘 버튼의 아이콘과 텍스트의 색상을 지정
 */

const IconButton = ({
  type = 'button',
  Icon,
  onClick,
  size,
  color,
}) => {

  return (
    <button
      type={type}
      className={`iconButton ${size ? size : ""} ${color ? color : ""}`}
      onClick={onClick}
    >
      {<Icon className={`icon`}/>}
    </button>
  );
};

export default IconButton;
