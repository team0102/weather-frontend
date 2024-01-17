import './Chip.scss';

/**
 * Chip props list
 * @property {string} id      - 라디오 버튼과 해당 라벨을 고유하게 식별하기 위해 사용.
 */

const Chip = ({ id, content, checked, onChange, ...props }) => {
  return (
    <div className="chipWrap" {...props}>
      <input
        className="chipInput"
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default Chip;
