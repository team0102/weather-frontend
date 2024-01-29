import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import IconButton from '../IconButton/IconButton';

const Nav = ({ navToggle, setNavToggle }) => {
  // esc 누르면 모달 닫기
  useEffect(() => {
    const esc = e => {
      // Escape(esc)키가 눌리면 closeModal 함수를 실행
      if (e.key === 'Escape') {
        closeNav();
      }
    };

    // keydown event를 감지하여 esc 함수를 실행
    window.addEventListener('keydown', esc);

    // 해당 이벤트를 삭제하여 메모리 누수를 방지함
    return () => {
      window.removeEventListener('keydown', esc);
    };
  }, []);

  /**네브 컴포넌트를 close 하는 함수입니다. */
  const closeNav = () => {
    setNavToggle(false);
  };

  /**
   * stopPropagation() 란? JavaScript의 Event 인터페이스에서 제공하는 내장 메소드입니다.
   * 그 목적은 캡처 및 버블링 단계 모두에서 현재 이벤트의 추가 전파를 중지하는 것입니다.
   * 1.onClick 이벤트를 인자로 받습니다.
   * 2 인자로 받은 event에 stopPropagation()메서드를 사용해 클릭이벤트가
   * 상위 DOM트리로 전달되는것을 막습니다.
   * 3.setNavToggle() 실행시켜 nav 컴포넌트를 close 해줍니다.
   */
  const closeNavOnBackgroundClick = event => {
    event.stopPropagation();
    setNavToggle(false);
  };

  return (
    <div
      className={`navWrapContainer ${navToggle ? 'navTransitionShow' : ''}`}
      onClick={closeNavOnBackgroundClick}
    >
      <nav
        className={`nav ${
          navToggle ? 'navTransitionShow' : 'navTransitionHidden'
        }`}
        onClick={event => event.stopPropagation()}
      >
        <div className="closeBtnWrap">
          <IconButton onClick={closeNav} content="X" size="xlg" />
        </div>

        <section className="loginSingUpWrap">
          <Link className="navLoginBtn">Sing In</Link>
          <Link className="navJoinBtn">Sing Up</Link>
        </section>

        <section>
          <ul className="linkWrap">
            <li>
              <Link>FORECAST</Link>
            </li>

            <li>
              <Link>STYLE</Link>
            </li>

            <li>
              <Link>CHAT</Link>
            </li>

            <li>
              <Link>BOOKMARK</Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
