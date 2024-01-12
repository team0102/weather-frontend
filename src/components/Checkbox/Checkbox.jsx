import './Checkbox.scss';
/**
 * Checkbox props list
 * @property {function} onChange   - 체크박스의 상태 변경을 위한 함수
 * @property {boolean} checked     - 체크박스가 체크 된 상태
 * @property {string} text         - 체크박스의 context 를 정의합니다.
 * @property {string} id           - 체크박스별 고유의 id 정의합니다.
 * @property {string} name         - 체크박스별 고유의 name을 정의합니다.
 */

const Checkbox = props => {
  const {
    type = 'checkbox',
    className = 'checkbox',
    name,
    context,
    isChecked,
  } = props;

  return (
    <label className="label">
      <input
        type={type}
        className={className}
        name={name}
        onChange={isChecked}
      />
      <span>{context}</span>
    </label>
  );
};

export default Checkbox;
