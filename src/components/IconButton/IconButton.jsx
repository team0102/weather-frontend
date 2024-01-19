import React, { useState, useEffect } from 'react';
import './IconButton.scss';
import useDynamicSvgImport from './useDynamicSvgImport';

/**
 * IconButton props list
 * @property {string} type: 'submit', 'button', 'reset'                                    - 아이콘 버튼의 타입을 지정
 * @property {function} onClick                                                            - 아이콘 버튼 클릭 시 실행할 동작을 정의한 함수
 * @property {string} size: 'sm', 'md', 'lg'                                               - 아이콘 버튼의 크기를 지정
 * @property {string} color: 'primary', 'secondary', 'tertiary', 'light', 'gray', 'dark'   - 아이콘 버튼의 아이콘의 색상을 지정
 * @property {string} content: ex) 'ArrowLeft', 'Bookmark', 'Chat', 'Comment', 'Home'      - 아이콘 버튼에 표시할 내용을 선택합니다. svg/Global 경로 내에 있는 모든 svg 파일을 확장자 제외한 파일이름으로 불러올 수 있습니다.
 */

const IconButton = ({ type = 'button', onClick, size, color, content }) => {
  const { SvgIcon } = useDynamicSvgImport(content);

  return (
    <div className={`iconButtonWrapper ${size ? size : ''}`}>
      <button
        type={type}
        className={`iconButton ${color ? color : ''}`}
        onClick={onClick}
      >
        {SvgIcon && <SvgIcon content={content} />}
      </button>
    </div>
  );
};

export default IconButton;
