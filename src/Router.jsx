import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import GlobalTopButton from './components/GlobalTopButton/GlobalTopButton';
import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';
import MyInfo from './pages/MyInfo/MyInfo';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import BookMark from './pages/BookMark/BookMark';
import Chat from './pages/Chat/Chat';

const Router = () => {
  return (
    <BrowserRouter basename="/weather">
      <Header />
      <ScrollToTop />
      <GlobalTopButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
