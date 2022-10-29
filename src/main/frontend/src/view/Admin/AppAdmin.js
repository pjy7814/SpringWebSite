import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './view/home';
import AdminInfo from './infoAdmin';
import Product from './view/product';
import Notice from './view/notice';
import Contact from './view/contact';


function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/info'>AdminInfo</Link>
          <br />
          <Link to='/product'>Product</Link>
          <br />
          <Link to='/notice'>Notice</Link>
          <br />
          <Link to='/contact'>Contact</Link>
        </nav>
        <header>----------------------------------</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminInfo" element={<AdminInfo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>----------------------------------</footer>
      </BrowserRouter>
  );
}

export default App;
