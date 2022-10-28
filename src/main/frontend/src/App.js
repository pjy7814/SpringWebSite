import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './view/home';
import Info from './view/info';
import Product from './view/product';
import Notice from './view/notice';
import Contact from './view/contact';
import Axios from './view/axios';

function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/info'>Info</Link>
          <br />
          <Link to='/product'>Product</Link>
          <br />
          <Link to='/notice'>Notice</Link>
          <br />
          <Link to='/contact'>Contact</Link>
          <br />
          <Link to='/axios'>Axios</Link>
        </nav>
        <header>----------------------------------</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/product" element={<Product />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
        <footer>----------------------------------</footer>
      </BrowserRouter>
  );
}

export default App;
