import Radio from '../Radio/Radio';
import './RadioGroup.scss';

const RadioGroup = ({ RadioData, onChange, className, selected }) => {
  /**
   * RadioGroup props list
   * RadioData 상수데이터는 아래목록으로 이루어져야합니다.
   * data 폴더에 RadioData.jsx 상수데이터 참고
   *@property {data} RadioData                           - 라디오그룹 데이터를 정의합니다.
   *-------------------------------------------------------------------------------------------------------------
   *@property {string} id                                - 라디오인풋 고유의 id 정의합니다.
   *@property {string} name                              - 라디오인풋 그룹의 이름을 지정 및 그중 한가지만 선택가능함을 정의합니다.
   *@property {string} value                             - 라디오인풋의 form을 제출시 서버에서 선택값을 식별하기위함을 정의합니다.
   *@property {string} context                           - 라디오인풋 옆에 표시되는 텍스트를 정의합니다.
   *@property {string} className                         - 라디오인풋의 스타일 변경을 위한 클래스 네이밍을 정의합니다.
   *@property {number} checked                           - 라디오인풋의 기본선택을 정의합니다.
   *@property {function} onChange                        - 라디오인풋의 상태 변경을 위한 함수를 정의합니다.
   */

  return (
    <div className="radioGroup">
      {RadioData.map(({ id, name, value, context }, index) => {
        return (
          <Radio
            key={index}
            id={`radio-${id}`}
            className={className}
            name={name}
            value={value} // value로 사용할 때는 문자열로 변환
            context={context}
            checked={selected === id} // 숫자 타입으로 직접 비교
            onChange={() => onChange(id)}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
