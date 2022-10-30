
import {BrowserRouter, Routes, Route, Link, Redirect, Switch} from 'react-router-dom';
import Home from './homeAdmin';
import InfoAdmin from './infoAdmin';
import Product from './productAdmin';
import Notice from './noticeAdmin';
import ContactAdmin from './contactAdmin';
import React from "react";


function AppAdmin() {
  return (
      <div>
          <nav>
              <Link to='/Admin'>Home</Link>
              <br />
              <Link to='/infoAdmin'>AdminInfo</Link>
              <br />
              <Link to='/productAdmin'>Product</Link>
              <br />
              <Link to='/noticeAdmin'>Notice</Link>
              <br />
              <Link to='/contactAdmin'>Contact</Link>
          </nav>
          <header>----------------------------------</header>
          <h1>admin page</h1>
          <footer>----------------------------------</footer>

      </div>
  );
}

export default AppAdmin;
