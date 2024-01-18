import { useEffect } from 'react';
import './SelectBox.scss';
/**
 * SelectBox props list
 * @property {string} name                                 - 셀렉트박스 고유의 이름
 * @property {Object} options                              - 셀렉트박스의 option 값을 전달하는 객체
 * @property {string} selected                             - 셀렉트박스에서 선택된 option의 key 값
 * @property {function} onChange                           - 셀렉트박스의 선택된 값이 변경되었을 때 변경 된 값을 받을 setState 함수
 */

const SelectBox = ({
  name,
  selected,
  options,
  onChange,
}) => {
  // 첫 렌더 시 아래의 상황인 경우 content의 첫번때 항목의 키값을 선택된 값으로 지정
  // 1. selected 값이 주어지지 않은 경우
  // 2. selected 값이 options의 키에 존재하지 않는 경우
  useEffect(() => {
    if (!Object.keys(options).includes(String(selected))) {
      onChange(Object.entries(options)[0][0]);
    } 
  }, []);

  return (
    <select 
      name={name} 
      className="selectBox"
      onChange={(e) => onChange(e.target.value)}
      value={selected}
    >
      {
        Object.entries(options).map(([key, content]) => {
          return (
            // content가 복잡한 값일 경우를 대비하여 key를 사용
            <option key={key} value={key}>
              {content}
            </option>
          );
        })
      }
    </select>
  );
};

export default SelectBox;
