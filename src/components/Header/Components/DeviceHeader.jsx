import { useLocation } from 'react-router-dom';
import IconButton from '../../IconButton/IconButton';

const DeviceHeader = ({ handleSearchButton, handlePrevButton }) => {
  const { pathname } = useLocation();

  return (
    <div className="deviceHeader">
      {pathname === '/' ? (
        // path가 '/'면 main header
        <div className="deviceHeaderWrap">
          <div className="deviceLogo">WEATHER</div>
          <div className="headerButtonWrap">
            <IconButton
              content="Search"
              size="lg"
              color="black"
              onClick={handleSearchButton}
            />
            <IconButton content="Hamburger" size="lg" color="black" />
          </div>
        </div>
      ) : pathname === '/search' ? (
        // path가 '/search'면 search header
        <div className="deviceHeaderWrap">
          <IconButton
            content="ArrowLeft"
            size="lg"
            color="black"
            onClick={handlePrevButton}
          />
          <div className="searchInputWrap">
            <input
              className="searchInput"
              type="text"
              placeholder="입력하세요"
            />
          </div>
        </div>
      ) : (
        // 나머진 Other Page Header
        <div className="deviceHeaderWrap">
          <IconButton
            content="ArrowLeft"
            size="lg"
            color="black"
            onClick={handlePrevButton}
          />
          <IconButton
            content="Search"
            size="lg"
            color="black"
            onClick={handleSearchButton}
          />
        </div>
      )}
    </div>
  );
};

export default DeviceHeader;
