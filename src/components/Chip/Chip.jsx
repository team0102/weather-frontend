import './Chip.scss';

/**
 * Chip props list
 * @property {string} id                - 각각의 칩 별로 가지고 있는 고유의 id
 * @property {boolean} checked          - 칩이 선택 된 상태
 * @property {function} defaultChecked  - 기본으로 체크된 칩
 * @property {function} onChange        - 칩의 상태 변경을 위한 함수
 * @property {string} content           - 칩의 내용. 실질적으로 보여지는 부분
 * @property {string} name              - 페이지에서 사용되는 칩 그룹의 이름
 */

const Chip = ({ id, content, checked, defaultChecked, onChange, ...props }) => {
  return (
    <div className="chipWrap" {...props}>
      <input
        className="chipInput"
        type="radio"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...props}
      />
      <label className="chipLabel" htmlFor={id}>
        {content}
      </label>
    </div>
  );
};

export default Chip;
