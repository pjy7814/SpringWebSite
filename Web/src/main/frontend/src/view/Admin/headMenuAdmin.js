import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function HeadMenuAdmin() {

    //로그아웃버튼
    const onClick = async () =>  {
        try {
            const response = await axios.post('/logout', {

                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                    document.location.href = '/'
                }
            )
            console.log("logout", response)
        } catch(e) {
            console.log('error!', e);
        }


    }
    return(
        <nav>
            <Link to='/admin'>Home</Link>
            <br />
            <Link to='/infoAdmin'>Info</Link>
            <br />
            <Link to='/productAdmin'>Product</Link>
            <br />
            <Link to='/noticeAdmin'>Notice</Link>
            <br />
            <Link to='/contactAdmin'>Contact</Link>
            <br />
            <button type="submit" onClick={onClick}>로그아웃</button>
        </nav>
    );
}