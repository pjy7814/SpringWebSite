import React, {useEffect, useState} from 'react';
import HeadMenuAdmin from "./headMenuAdmin";
import axios from "axios";
import {Link} from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function HomeAdmin() {
    // const [user_login, setLoginData] = useState('');
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('/loginCheck')
    //         .then(response => {
    //                 setLoginData(response.data);
    //                 // 로그인 안한 멤버 접근 제어
    //                 if (response.data !== "loginMember"){
    //                     navigate('/login');
    //                 }
    //             }
    //         )
    //         .catch(error => console.log(error))
    // }, []);
    return (
        <div>
            <HeadMenuAdmin/>
            <header>----------------------------------</header>
            <h1>admin Home</h1>
            <footer>----------------------------------</footer>

        </div>
    )
}