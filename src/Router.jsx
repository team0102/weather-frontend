import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import GlobalTopButton from './components/GlobalTopButton/GlobalTopButton';
import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Test from './pages/Test';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter basename="/weather">
      <Header />
      <ScrollToTop />
      <GlobalTopButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
