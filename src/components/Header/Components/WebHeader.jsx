import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '../../IconButton/IconButton';
import Nav from '../../Nav/Nav';

const WebHeader = ({
  handlePrevButton,
  handleSearchButton,
  handleMyPageButton,
}) => {
  const [navToggle, setNavToggle] = useState(false);

  const { pathname } = useLocation();

  const isLogged = localStorage.getItem('token');

  const navOpen = () => {
    setNavToggle(true);
  };

  return (
    <div className="webHeader">
      {pathname === '/search' ? (
        // path가 '/search'면 search header
        <div className="webHeaderWrap">
          <div className="searchInputWrap">
            <input
              className="searchInput"
              type="text"
              placeholder="입력하세요"
            />
          </div>

          <span className="cancelSearch" onClick={handlePrevButton}>
            취소
          </span>
        </div>
      ) : (
        // 나머진 기본 header
        <div className="webHeaderMain">
          <div className="webHeaderUtil">
            <ul>
              {isLogged ? (
                <li>로그아웃</li>
              ) : (
                <li>
                  <Link to="/login">로그인</Link>
                </li>
              )}
              <li>공지사항</li>
            </ul>
          </div>
          <div className="webHeaderWrap">
            <Link to="/">
              <h1 className="webLogo">WEATHER</h1>
            </Link>

            <div className="headerCategory">
              <ul className="headerCategoryList">
                <li>FORECAST</li>
                <li>STYLE</li>
                <li>CHAT</li>
                <li>
                  <Link to="/bookmark">BOOKMARK</Link>
                </li>
              </ul>
            </div>

            <div className="headerButtonWrap">
              <IconButton
                content="User"
                size="xlg"
                color="black"
                onClick={handleMyPageButton}
              />

              <IconButton
                content="Search"
                size="xlg"
                color="black"
                onClick={handleSearchButton}
              />

              <IconButton
                content="Hamburger"
                size="xlg"
                color="black"
                onClick={navOpen}
              />
            </div>
          </div>
        </div>
      )}
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
    </div>
  );
};

export default WebHeader;
