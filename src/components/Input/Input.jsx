import './Input.scss';

const Input = ({ type = 'text', placeholder, name, value, onChange }) => {
  return (
    <input
      className="basicInput"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onWheel={e => e.target.blur()} // 마우스 휠 스크롤 발생시 input focus 제거
    />
  );
};

export default Input;
