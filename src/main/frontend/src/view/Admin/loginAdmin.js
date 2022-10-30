import { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function LoginAdmin() {

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
    const onClick = async () =>  {
        try {
            const response = await axios.post('/login', reqData,{

                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data)

            if (response.data == 1) {
                console.log('loginSuccess!')
                sessionStorage.setItem('user_id', user_login.id)
                document.location.href = '/admin'
            } else {
                alert('로그인에 실패하였습니다. 다시 확인해주세요');
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

export default LoginAdmin;