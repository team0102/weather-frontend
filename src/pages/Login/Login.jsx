import './Login.scss';
import { ReactComponent as KakaoLogo } from '../../../public/svg/Login/KakaoLogo.svg';
import { ReactComponent as NaverLogo } from '../../../public/svg/Login/NaverLogo.svg';

const Login = () => {
  return (
    <main className="main">
      <div className="loginWrap">
        <section className="loginLogoBox">
          <div className="loginTitleBox">
            <h2 className="loginTitle">
              기온에 맞는 옷차림으로
              <br />
              편안한 하루를 시작해보세요
            </h2>
          </div>
        </section>

        <section className="loginButtonWrap">
          <a className="loginButtonBox" href={''}>
            <div className="loginButton kakao">
              <KakaoLogo />
              <span>카카오로 시작하기</span>
            </div>
          </a>

          <a className="loginButtonBox" href={''}>
            <div className="loginButton naver">
              <NaverLogo />
              <span>네이버로 시작하기</span>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
};

export default Login;
