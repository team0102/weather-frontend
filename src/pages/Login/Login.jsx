import './Login.scss';

const Login = () => {
  return (
    <main className="main">
      <div className="loginWrap">
        <div className="loginLogoBox">
          <h2 className="loginLogo">WEATHER</h2>
        </div>
        <div className="loginButtonBox">
          <div className="loginButton">
            <img
              src="./images/Login/login_btn_kakao.png"
              alt="카카오로그인버튼"
            />
          </div>
          <div className="loginButton">
            <div className="naverLoginButton">
              <img
                src="./images/Login/login_btn_naver.png"
                alt="네이버로그인버튼"
              />
              {/* <span>네이버 로그인</span> */}
            </div>
          </div>
          <div className="loginButton">
            <button>구글</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
