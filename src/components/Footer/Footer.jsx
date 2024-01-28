import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FOOTER_ICON_DATA } from '../../data/FooterData/FooterIconData';
import { FOOTER_ITEM_DATA } from '../../data/FooterData/FooterItemData';
import IconButton from '../IconButton/IconButton';
import './Footer.scss';

const Footer = () => {
  const [clickedIcon, setClickedIcon] = useState(null);
  // const navigate = useNavigate();

  const handleIconClick = (content, path) => {
    setClickedIcon(content);
    console.log(path);
    // navigate(path);
  };
  return (
    <footer className="footer">
      <div className="webFooter">
        <ul className="footerList">
          {FOOTER_ITEM_DATA.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
        <span className="footerCopyright">© 2024 WEATHER Project</span>
      </div>
      <ul className="deviceFooter">
        {FOOTER_ICON_DATA.map(({ id, color, size, content, label, path }) => (
          <li className="footerIconWrap" key={id}>
            <IconButton
              onClick={() => handleIconClick(content, path)}
              color={clickedIcon === content ? 'primary' : color}
              size={size}
              content={content}
            />
            <span
              className={`iconText ${
                clickedIcon === content ? 'selected' : ''
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
