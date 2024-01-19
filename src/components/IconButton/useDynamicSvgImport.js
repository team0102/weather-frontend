import React, { useEffect, useRef, useState } from 'react';

/**
 * useDynamicSvgImport params list
 * @param {string} iconName             - Svg 파일의 이름 string 값
 * @returns {Object}                    - SvgIcon이라는 키로 ReactComponent를 갖는 객체를 반환
 */

const useDynamicSvgImport = (iconName) => {

  // svg 파일의 ReactComponent를 import 한 후 setState로 state에 저장했을 때와 ref.current로 저장했을 때 결과물이 차이가 있음
  // state를 사용하는 경우 $$typeof 속성에 관한 경고가 발생하여, 경고 발생하지 않는 ref 사용
  // 대신 ref의 값은 화면에 변경사항을 바로 적용하지 않으므로, setLoading으로 렌더를 유도
  const importedIconRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // 동적으로 '../../svg/Global' 경로 안에서 iconName이라는 이름을 갖는 svg파일을 로딩
    const importSvgIcon = async () => {
      try {
        const svg = await import(`../../svg/Global/${iconName}.svg`);
        importedIconRef.current = svg.ReactComponent; 
      } catch (err) {
        console.error(err);
      } finally {
        // ref.current 값을 변경해준 후 변경사항을 렌더하기 위해 state 값을 한번 변경
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { SvgIcon: importedIconRef.current };
}

export default useDynamicSvgImport;