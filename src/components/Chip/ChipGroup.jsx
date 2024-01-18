import { useEffect, useState } from 'react';
import { customAxios } from '../../API/API.jsx';
import { API } from '../../../conpig.js';
import Chip from './Component/Chip.jsx';
import './ChipGroup.scss';

const ChipGroup = ({ chipSelect }) => {
  // searchesList를 받아오기 위한 state
  const [searchesList, setSearchesList] = useState([]);

  // 페이지 진입시 requestChipList 함수를 실행시킴
  useEffect(() => {
    requestChipList();
  }, []);

  // customAxios를 이용하여 POPULAR_SEARCHES이라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setSearchesList 통해 searchesList의 상태를 업데이트
  // 에러발생시 경고창을 띄움
  const requestChipList = async () => {
    try {
      const request = await customAxios.get(API.POPULAR_SEARCHES);
      setSearchesList(request.data.result);
    } catch (error) {
      alert('에러 발생');
    }
  };

  // 업데이트 된 searchesList가 화면에 렌더링됨
  return (
    <div className="chipGroupWrap">
      {searchesList.map(({ id, name, content, category }) => (
        <Chip
          key={id}
          id={id}
          name={name}
          content={content}
          onChange={() => {
            chipSelect(category);
          }}
        />
      ))}
    </div>
  );
};

export default ChipGroup;
