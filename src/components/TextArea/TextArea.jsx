import { useRef } from 'react';
import './TextArea.scss';

/**
 * TextArea props list
 * @property {string} value               - textarea에 입력되는 값
 * @property {string} placeholder         - textarea에 입력 될 내용에 대한 미리보기
 * @property {function} onChange          - 입력시 실행되는 함수
 * @property {number} rows                - textarea의 행 수. 기본값은 2줄
 */

const TextArea = ({ value, placeholder, onChange, rows, ...props }) => {
  const textAreaRef = useRef();

  // 입력값을 감지하여 사이즈를 동적으로 조절
  const handleResizeHeight = e => {
    textAreaRef.current.style.height = 'auto'; // height 초기화
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'; // 내용 입력시 생기는 스크롤의 높이를 textarea box의 현재 높이로 설정
    onChange(e); // 부모 컴포넌트의 onChange 이벤트를 전달
  };

  return (
    <textarea
      className="textAreaBox"
      value={value}
      onChange={handleResizeHeight}
      placeholder={placeholder}
      rows={rows}
      ref={textAreaRef}
      {...props}
    />
  );
};

export default TextArea;
