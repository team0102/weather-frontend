import './SelectBox.scss';
/**
 * SelectBox props list
 * @property {string} id                                   - 셀렉트박스별 고유의 id 정의합니다.
 * @property {string} name                                 - 셀렉트박스별 고유의 name을 정의합니다.
 * @property {string} context                              - 셀렉트박스의 context 를 정의합니다.
 * @property {function} onChange                           - 셀렉트박스의 상태 변경을 위한 함수
 * @property {boolean} checked                             - 셀렉트박스가 체크 된 상태
 */

const SelectBox = ({
  id,
  className,
  name,
  context,
  onChange,
  checked,
  ...props
}) => {
  return (
    <label className="SelectBoxLabel">
      <input
        id={id}
        type="SelectBox"
        className={className}
        name={name}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <span>{context}</span>
    </label>
  );
};

export default SelectBox;
