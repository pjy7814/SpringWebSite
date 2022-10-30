import {Link} from "react-router-dom";
import React from "react";

export default function HeadMenuAdmin() {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/infoAdmin'>Info</Link>
            <br />
            <Link to='/productAdmin'>Product</Link>
            <br />
            <Link to='/noticeAdmin'>Notice</Link>
            <br />
            <Link to='/contactAdmin'>Contact</Link>
            <br />
            <Link to='/logout'>Logout</Link>
        </nav>
    );
}