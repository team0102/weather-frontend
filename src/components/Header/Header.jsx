import { useNavigate } from 'react-router-dom';
import WebHeader from './Components/WebHeader';
import DeviceHeader from './Components/DeviceHeader';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleSearchButton = () => {
    navigate('/search');
  };

  const handlePrevButton = () => {
    navigate(-1);
  };

  const handleMyPageButton = () => {
    navigate('/myinfo');
  };

  return (
    <header className="header">
      <WebHeader
        handlePrevButton={handlePrevButton}
        handleSearchButton={handleSearchButton}
        handleMyPageButton={handleMyPageButton}
      />
      <DeviceHeader
        handlePrevButton={handlePrevButton}
        handleSearchButton={handleSearchButton}
      />
    </header>
  );
};

export default Header;
