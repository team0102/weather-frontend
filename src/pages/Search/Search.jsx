import ChipGroup from '../../components/Chip/ChipGroup.jsx';
import PopularKeyword from './Components/PopularKeyword.jsx';
import './Search.scss';

const Search = () => {
  return (
    <div className="searchWrap">
      <article className="recommended">
        <h2 className="keywordTitle">추천 검색어</h2>
        <ChipGroup />
      </article>
      <PopularKeyword />
    </div>
  );
};

export default Search;
