import './Radio.scss';

/**
 * Checkbox props list
 *@property {string} id                                - 라디오인풋 고유의 id 정의합니다.
 *@property {string} name                              - 라디오인풋 그룹의 이름을 지정 및 그중 한가지만 선택가능함을 정의합니다.
 *@property {string} value                             - 라디오인풋의 form을 제출시 서버에서 선택값을 식별하기위함을 정의합니다.
 *@property {string} context                           - 라디오인풋 옆에 표시되는 텍스트를 정의합니다.
 *@property {function} defaultChecked                  - 라디오인풋의 기본선택을 정의합니다.
 *@property {function} onChange                        - 라디오인풋의 선택이 변경될 때 호출되는 함수를 정의합니다.
 */

const Radio = ({
  id,
  className,
  name,
  value,
  onChange,
  context,
  defaultChecked,
  ...props
}) => {
  return (
    <label className="radioLabel">
      <input
        id={id}
        type="radio"
        className={`radioInput ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...props}
      />
      <span className="radioContext">{context}</span>
    </label>
  );
};

export default Radio;
