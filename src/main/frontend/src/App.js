import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './view/home';
import Info from './view/info';
import Product from './view/product';
import Notice from './view/notice';
import Contact from './view/contact';
import LoginAdmin from './view/Admin/loginAdmin'
import AppAdmin from "./view/Admin/AppAdmin";
import InfoAdmin from "./view/Admin/infoAdmin";
import ContactAdmin from "./view/Admin/contactAdmin";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/product" element={<Product />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/admin" element={<AppAdmin />} />
            <Route path="/infoAdmin" element={<InfoAdmin />} />
            <Route path="/productAdmin" element={<Product />} />
            <Route path="/noticeAdmin" element={<Notice />} />
            <Route path="/contactAdmin" element={<ContactAdmin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
