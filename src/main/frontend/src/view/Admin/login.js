import { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {

    const [user_login, setLoginData] = useState({
        id: '',
        passwd: '',
    });
    const {id, passwd} = user_login;
    const onChange = (e) => {
        setLoginData({
            ...user_login,
            [e.target.name]: e.target.value
        });
    };

    const reqData = JSON.stringify(user_login);
    const navigate = useNavigate();
    const onClick = async () =>  {
        try {
            const response = await axios.post('/login', reqData,{

                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("login", response.data)

            if (response.data === "alert") {

                alert('로그인에 실패하였습니다. 다시 확인해주세요');
            } else {            // 로그인 성공 -> 페이지 이동
                // console.log('loginSuccess!')
                // document.location.href = '/admin'
                navigate('/admin')
            }
        } catch(e) {
            console.log('error!', e);
        }

    }

    return (
        <div>
            <div>
                아이디 : <input name = "id" type="text" placeholder="ID" value={id} onChange={onChange} /><br />
                비밀번호: <input name = "passwd" type="text" placeholder="Password" value={passwd} onChange={onChange} /><br />
                <button type="submit" onClick={onClick}>로그인</button>
            </div>
        </div>
    );
}

export default Login;