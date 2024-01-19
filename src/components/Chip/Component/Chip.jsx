import './Chip.scss';

/**
 * Chip props list
 * @property {string} id                - 라디오 버튼과 해당 라벨을 고유하게 식별하기 위해 사용
 * @property {boolean} checked          - 칩이 선택 된 상태
 * @property {function} onChange        - 칩의 상태 변경을 위한 함수
 * @property {string} name              - 페이지에서 사용될 칩 그룹의 이름
 * @property {string} content           - 칩의 내용. 실질적으로 보여지는 부분
 */

const Chip = ({ id, content, checked, onChange, name, ...props }) => {
  return (
    <div className="chipWrap" {...props}>
      <input
        className="chipInput"
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        name={name}
        {...props}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default Chip;
