import './Input.scss';

/**
 *@property {string} type                    - 인풋의 타입. text를 기본으로 지정함
 *@property {string} label                   - 인풋의 라벨
 *@property {string} placeholder             - 인풋에 입력 될 내용에 대한 미리보기
 *@property {string} name                    - 개별 인풋을 구별하는 값
 *@property {string} value                   - 인풋에 입력되는 입력값
 *@property {Number} maxLength               - 최대길이를 지정하는 값
 *@property {function} onChange              - 입력시 실행되는 함수
 */

const Input = ({
  type = 'text',
  id,
  label,
  placeholder,
  name,
  value,
  maxLength,
  onChange,
  disabled,
}) => {
  return (
    <div className="InputWrap">
      <label htmlFor={id}>{label}</label>
      <input
        className="basicInput"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
        onWheel={e => e.target.blur()} // 마우스 휠 스크롤 발생시 input focus 제거
      />
    </div>
  );
};

export default Input;
