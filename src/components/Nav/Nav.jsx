import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ setToggle }) => {
  const closeNav = () => {
    setToggle(false);
  };
  return (
    <div className="navWrapContainer">
      <nav className="nav">
        <div className="closeBtnWrap">
          <button onClick={closeNav}>닫기 버튼</button>
        </div>

        <section className="loginSingUpWrap">
          <button className="navLoginBtn">Sing In</button>
          <button className="navJoinBtn">Sing Up</button>
        </section>

        <section>
          <ul className="linkWrap">
            <li>
              <Link>Weather</Link>
            </li>
            <li>
              <Link>Community</Link>
            </li>
            <li>
              <Link>RealTime Chat</Link>
            </li>
            <li>
              <Link>Hot Fashion</Link>
            </li>
            <li>
              <Link>Preferences</Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
