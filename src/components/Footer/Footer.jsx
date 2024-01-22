import { FOOTER_ICON_DATA } from '../../data/FooterData/FooterIconData';
import IconButton from '../IconButton/IconButton';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="webFooter">
        <ul className="footerList">
          <li>회사소개</li>
          <li>이용약관</li>
          <li>공지사항</li>
          <li>찾아오시는길</li>
          <li>개인정보처리방침</li>
        </ul>
        <span className="footerCopyright">© 2024 WEATHER Project</span>
      </div>
      <div className="deviceFooter">
        {FOOTER_ICON_DATA.map(({ color, size, content, label }) => (
          <div className="footerIconWrap" key={content}>
            <IconButton
              onClick={() => console.log({ content })}
              color={color}
              size={size}
              content={content}
            />
            <span className="iconText">{label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
