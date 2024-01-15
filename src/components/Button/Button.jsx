import './Button.scss';
/**
 * Button props list
 * @property {string} type: 'submit', 'button', 'reset'         - 버튼의 타입을 지정
 * @property {string} text                                      - 버튼에 표시 할 텍스트
 * @property {function} onClick                                 - 버튼 클릭 시 실행 할 함수
 * @property {string} isDisabled                                - 버튼의 비활성화 상태를 전달
 * @property {string} backgroundColor                           - 버튼의 바탕 색상을 지정
 * @property {string} borderColor                               - 버튼의 가장자리 색상을 지정 
 * @property {string} textColor                                 - 버튼 텍스트의 색상을 지정
 * @property {string} textWeight                                - 버튼 텍스트의 두께를 지정
 */

const Button = ({
  type,
  text,
  onClick,
  isDisabled = false,
  backgroundColor,
  borderColor,
  textColor,
  textWeight,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    border: `1px solid ${borderColor}`,
    color: textColor,
    fontWeight: textWeight, 
  };

  return (
    <button 
      type={type}
      className={`button`} 
      onClick={onClick}
      style={isDisabled ? null : buttonStyle}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
