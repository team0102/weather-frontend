import './TextArea.scss';

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="basicTextArea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
