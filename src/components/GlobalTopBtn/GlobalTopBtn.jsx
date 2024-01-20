import './GlobalTopBtn.scss';

const GlobalTopBtn = () => {
  /**스크롤을 최상단으로 이동시키는 함수입니다. */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return <button className="globalTopBtn" onClick={scrollToTop}></button>;
};

export default GlobalTopBtn;
