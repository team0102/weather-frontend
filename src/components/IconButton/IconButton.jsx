import './IconButton.scss';
/**
 * IconButton props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 아이콘 버튼의 타입을 지정
 * @property {function} onClick                                                            - 아이콘 버튼 클릭 시 실행할 동작을 정의한 함수
 * @property {string} size: 'sm', 'md', 'lg'                                               - 아이콘 버튼의 크기를 지정
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'gray', 'dark'   - 아이콘 버튼의 아이콘의 색상을 지정
 */

const IconButton = ({
  type = 'button',
  onClick,
  size,
  color,
  children,
}) => {

  return (
    <div className={`iconButtonWrapper ${size ? size : ""}`}>
      <button
        type={type}
        className={`iconButton ${color ? color : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default IconButton;
