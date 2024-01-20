import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import GlobalTopBtn from './components/GlobalTopBtn/GlobalTopBtn';

const Router = () => {
  return (
    <BrowserRouter basename="/weather">
      <ScrollToTop />
      <GlobalTopBtn />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
