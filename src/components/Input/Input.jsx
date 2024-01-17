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
    />
  );
};

export default Input;
