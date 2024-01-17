import './IconButton.scss';
/**
 * IconButton props list
 * @property {string} type: 'submit', 'button', 'reset'         - 아이콘 버튼의 타입을 지정
 * @property {ReactComponent} Icon                              - 아이콘 버튼에 표시 할 아이콘 컴포넌트
 * @property {function} onClick                                 - 아이콘 버튼 클릭 시 실행할 동작을 정의한 함수
 * @property {string} text                                      - (선택) 아이콘 옆에 표시할 텍스트
 * @property {boolean} isInactive                               - 아이콘 버튼의 비활성화 상태 값
 * @property {string} iconWidth                                 - 아이콘 버튼 내부의 아이콘 크기를 지정
 * @property {string} contentColor                              - 아이콘 버튼의 아이콘과 텍스트의 색상을 지정
 * @property {string} textWeight                                - 아이콘 버튼 텍스트의 두께를 지정
 */

const IconButton = ({
  type = 'button',
  Icon,
  onClick,
  text,
  isInactive,
  textWeight,
  contentColor,
  iconWidth = '30px',
}) => {
  const buttonStyle = {
    fill: contentColor,
  };
  
  const spanStyle = {
    fontWeight: textWeight,
    color: contentColor,
  }

  return (
    <button
      type={type}
      className={`iconButton ${isInactive ? 'inactive' : ''}`}
      onClick={isInactive ? onClick : null}
      style={buttonStyle}
    >
      {<Icon width={iconWidth} />} 
      {text ? <span style={spanStyle} >{text}</span> : null}
    </button>
  );
};

export default IconButton;
