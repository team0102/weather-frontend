import { useEffect, useState } from 'react';
import { customAxios } from '../../../API/API.jsx';
import { API } from '../../../../config.js';
import './PopularKeyword.scss';

const PopularKeyword = () => {
  const [keywordList, setKeywordList] = useState([]);
  const [keywordCategory, setKeywordCategory] = useState('');

  useEffect(() => {
    requestKeywordList();
  }, []);

  const requestKeywordList = async () => {
    try {
      const request = await customAxios.get(API.KEYWORDS);
      setKeywordList(request.data.result);
      setKeywordCategory(request.data.category);
    } catch (error) {
      alert('검색어를 불러오던 중 에러가 발생했습니다');
    }
  };

  return (
    <article className="keywordBox">
      <h2 className="keywordTitle">{keywordCategory}</h2>
      <ol className="popularKeyword">
        {keywordList.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ol>
    </article>
  );
};

export default PopularKeyword;
