import {Link} from "react-router-dom";
import React from "react";

export default function headMenu() {
    return(
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
            <Link to='/login'>Login</Link>
        </nav>
    );

}