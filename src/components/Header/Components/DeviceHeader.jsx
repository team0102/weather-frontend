import { useLocation } from 'react-router-dom';
import IconButton from '../../IconButton/IconButton';
import { useState } from 'react';
import Nav from '../../Nav/Nav';

const DeviceHeader = ({ handleSearchButton, handlePrevButton }) => {
  const { pathname } = useLocation();

  const [navToggle, setNavToggle] = useState(false);

  const navOpen = () => {
    setNavToggle(true);
  };

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
            <IconButton
              content="Hamburger"
              size="lg"
              color="black"
              onClick={navOpen}
            />
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
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
    </div>
  );
};

export default DeviceHeader;
