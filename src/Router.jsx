import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import GlobalTopButton from './components/GlobalTopButton/GlobalTopButton';

const Router = () => {
  return (
    <BrowserRouter basename="/weather">
      <ScrollToTop />
      <GlobalTopButton />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
