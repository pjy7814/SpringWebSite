import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './view/home';
import Info from './view/info';
import Product from './view/product';
import Notice from './view/notice';
import NoticeDetail from './view/noticeDetail';
import Contact from './view/contact';
import LoginAdmin from './view/login'
import HomeAdmin from "./view/Admin/homeAdmin";
import InfoAdmin from "./view/Admin/infoAdmin";
import NoticeAdmin from "./view/Admin/Notice/noticeAdmin"
import NoticeCreate from "./view/Admin/Notice/noticeAdmin_create"
import ContactAdmin from "./view/Admin/contactAdmin";
import React from "react";
import ProductAdmin from "./view/Admin/productAdmin";
import MyPage from "./view/Admin/myPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/product" element={<Product />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:noticeId" element={<NoticeDetail />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/infoAdmin" element={<InfoAdmin />} />
            <Route path="/productAdmin" element={<ProductAdmin />} />
            <Route path="/noticeAdmin" element={<NoticeAdmin />} />
            <Route path="/contactAdmin" element={<ContactAdmin />} />
          <Route path="/noticeCreate" element={<NoticeCreate />}/>
          <Route path="/mypage" element={<MyPage />}/>
          {/*<Route path="/logout" element={<Home />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
