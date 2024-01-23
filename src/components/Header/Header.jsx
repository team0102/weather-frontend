import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import './Header.scss';

const Header = () => {
  const [showInput, setShowInput] = useState(false);

  // 현재 페이지의 경로를 가져옴. 페이지에 따라 header 구성을 변경시키기 위해 사용
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 뒤로
  const handlePrevButton = () => {
    navigate(-1);
  };

  // 검색 취소. 취소시 이전 페이지로 돌아감
  const handleCancelSearch = () => {
    setShowInput(false);
    navigate(-1);
  };

  // 검색
  const handleSearchButton = () => {
    setShowInput(true);
    navigate('/search');
  };

  return (
    <header className="header">
      {/* web header  */}
      <div className="webHeader">
        <div>WEATHER</div>
      </div>

      {/* tablet, mobile header */}
      <div className="deviceHeader">
        {/* 1. 현재 페이지가 '/'(main)인 경우 다음의 main header가 표시됨 */}
        {pathname === '/' ? (
          <div className="deviceMainHeader">
            <div className="headerLogo">WEATHER</div>
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
        ) : (
          // 3. 검색 버튼을 눌렀을 경우 아래의 header가 표시됨
          <div>
            {showInput ? (
              <div className="devicePageHeader">
                <div className="searchInputWrap">
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="입력하세요"
                  />
                </div>
                <div className="cancelSearch" onClick={handleCancelSearch}>
                  취소
                </div>
              </div>
            ) : (
              // 2. 메인이 아닌 페이지는 아래의 header가 표시됨
              <div className="devicePageHeader">
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
        )}
      </div>
    </header>
  );
};

export default Header;
