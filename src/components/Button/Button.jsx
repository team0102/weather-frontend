import './Button.scss';
/**
 * Button props list
 * @property {function} onClick    - 버튼 클릭 시 실행 할 함수
 * @property {boolean} isDisabled  - 버튼 비활성화 상태
 * @property {string} text         - 버튼에 표시 할 텍스트
 */

const Button = props => {
  const {
    onClick,
    text,
    isDisabled,
  } = props;

  return (
    <button 
      className={`button ${isDisabled ? 'disabled' : ''}`} 
      onClick={isDisabled ? null : onClick}
    >
      {text}
    </button>
  );
};

export default Button;
