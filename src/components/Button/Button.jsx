import './Button.scss';
/**
 * Button props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 버튼의 타입을 지정
 * @property {function} onClick                                                            - 버튼 클릭 시 실행 할 함수
 * @property {string} isDisabled                                                           - 버튼의 비활성화 상태를 전달
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'dark', 'gray'   - 버튼의 색상을 지정하는 className
 */

const Button = ({
  type,
  onClick,
  isDisabled = false,
  color,
  children,
}) => {
  return (
    <button 
      type={type}
      className={`button ${color ? color : ""}`} 
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
