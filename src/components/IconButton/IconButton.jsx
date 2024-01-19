import React, { useState, useEffect } from 'react';
import './IconButton.scss';

const loadSvg = (content) => {
  return import(`../../svg/Global/${content}.svg`);
};

/**
 * IconButton props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 아이콘 버튼의 타입을 지정
 * @property {function} onClick                                                            - 아이콘 버튼 클릭 시 실행할 동작을 정의한 함수
 * @property {string} size: 'sm', 'md', 'lg'                                               - 아이콘 버튼의 크기를 지정
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'gray', 'dark'   - 아이콘 버튼의 아이콘의 색상을 지정
 * @property {string} content: 'ArrowLeft', 'ArrowRight', 'Bookmark', 'Chat', 'Comment', 'Delete', 'Edit', 'Feed', 'Hamburger', 'Home', 'Image', 'Like', 'Location',
 */

const IconButton = ({ type = 'button', onClick, size, color, content }) => {
  const [SvgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    const loadSvgComponent = async () => {
      const svg = await loadSvg(content);
      setSvgComponent(svg.ReactComponent);
    };

    loadSvgComponent();
  }, [content]);

  return (
    <div className={`iconButtonWrapper ${size ? size : ''}`}>
      <button
        type={type}
        className={`iconButton ${color ? color : ''}`}
        onClick={onClick}
      >
        {SvgComponent}
      </button>
    </div>
  );
};

export default IconButton;
