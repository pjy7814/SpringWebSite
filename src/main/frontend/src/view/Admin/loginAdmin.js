import { useEffect, useState, useRef } from 'react';
import axios from "axios";


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
    const [resData, setResdata] = useState('');
    const onClick = async () =>  {
        try {
            const response = await axios.post('/login', reqData,{

                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(reqData);
            console.log(response.data)
            setResdata(response.data);
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