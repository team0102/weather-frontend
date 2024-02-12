import React, { useEffect, useRef, useState } from 'react';
import './CustomSelectBox.scss';

const CustomSelectBox = ({ data, value, name, onChange }) => {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [selectData, setSelectData] = useState(data);
  const selectBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelectValue = e => {
    e.preventDefault();
    setCurrentValue(e.target.textContent);
    setOpen(false);
    onChange && onChange(e.target.textContent);
  };

  return (
    <div
      className={`selectBoxContainer ${open ? 'open' : ''}`}
      onClick={handleOpen}
      ref={selectBoxRef}
      name={name}
    >
      <span className="currentValue">{currentValue}</span>
      <ul>
        {selectData?.map((item, index) => (
          <li key={index} onClick={handleSelectValue}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelectBox;
