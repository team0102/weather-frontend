import './Checkbox.scss';
/**
 * Checkbox props list
 * @property {string} id                                   - 체크박스별 고유의 id 정의합니다.
 * @property {string} name                                 - 체크박스별 고유의 name을 정의합니다.
 * @property {string} context                              - 체크박스의 context 를 정의합니다.
 * @property {function} onChange                           - 체크박스의 상태 변경을 위한 함수
 * @property {boolean} checked                             - 체크박스가 체크 된 상태
 */

const Checkbox = ({
  id,
  className,
  name,
  context,
  onChange,
  checked,
  ...props
}) => {
  return (
    <label className="checkBoxLabel">
      <input
        id={id}
        type="checkbox"
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

export default Checkbox;
