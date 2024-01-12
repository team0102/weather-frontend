import Checkbox from '../../components/Checkbox/Checkbox';
import Radio from '../../components/Radio/Radio';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import './Main.scss';
import { RADIO_GROUP_DATA } from '../../data/RadioData';

// 1.최상위 메인태그는 항상 파일명을 따라가 네스팅 해줍니다. scss 파일에서
// 이파일은 Main.jsx 이기때문에 최상위 부모태그 네이밍을 main으로 해주는걸 컨벤션으로합니다.

const testF = id => {
  console.log(id);
};
const Main = () => {
  return (
    <main className="main">
      <h1>Weather-Project 시작</h1>
      <RadioGroup RadioData={RADIO_GROUP_DATA} onChange={testF}></RadioGroup>
    </main>
  );
};

export default Main;
