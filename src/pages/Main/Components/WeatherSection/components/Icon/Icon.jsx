import React, { useState, useEffect } from 'react';
import './Icon.scss';

const loadSvg = (content, path) => {
  return import(`${path}/${content}.svg`);
  
};

/**
 * Icon props list
 * @property {string} content                      - 아이콘에 표시할 내용을 선택합니다. path 경로 내에 있는 모든 svg 파일을 확장자 제외한 파일이름으로 불러올 수 있습니다.
 * @property {string} path                         - 아이콘 파일의 경로값
 * @property {string} size: 'sm' ~ 'xxxlg'         - 아이콘 사이즈를 결정
 */

const Icon = ({ content, path, size }) => {
  const [SvgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    const loadSvgComponent = async () => {
      const svg = await loadSvg(content, path);
      setSvgComponent(() => svg.ReactComponent);
    };

    loadSvgComponent();
  }, [content]);

  return (
    <div className={`iconWrapper ${size ? size : ''}`}>
      {SvgComponent && <SvgComponent className="icon" />}
    </div>
  );
};

export default Icon;
