import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';

const Router = () => {
  return (
    <BrowserRouter basename="/weather">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
