import './Input.scss';

const Input = ({
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
