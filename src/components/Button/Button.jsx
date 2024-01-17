import './Button.scss';
/**
 * Button props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 버튼의 타입을 지정
 * @property {function} onClick                                                            - 버튼 클릭 시 실행 할 함수
 * @property {string} isDisabled                                                           - 버튼의 비활성화 상태를 전달
 * @property {string} size: 'sm', 'md', 'lg'                                               - 버튼의 크기를 지정하는 className
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'dark', 'gray'   - 버튼의 색상을 지정하는 className
 * @property {string} style: 'solid', 'outline', 'text-only'                               - 버튼의 스타일을 지정하는 className
 */

const Button = ({
  type,
  onClick,
  isDisabled = false,
  size,
  color,
  style,
  children,
}) => {
  return (
    <button 
      type={type}
      className={`button ${size ? size : ""} ${color ? color : ""} ${style ? style : ""}`} 
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
