import { FOOTER_ICON_DATA } from '../../data/FooterIconData';
import IconButton from '../IconButton/IconButton';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="webFooter">
        <div>web</div>
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
