import React, {useEffect, useState} from "react";
import axios from "axios";
import HeadMenuAdmin from "./headMenuAdmin";

export default function InfoAdmin() {
    const [info, setInfo] = useState({
        title: '',
        subtitle: '',
        content:'',
    })
    // const {title, subtitle, content} = info;
    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        axios.get('/info')
            .then(response => {
                    setInfo(response.data);
                    console.log(response.data);
                }
            )
            .catch(error => console.log(error))
    }, []);

    // 저장 버튼
    const onClick = async () =>  {
        try {
            const response = await axios.post('/update/info', info,{

                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("login", response.data)

            if (response.data == false) {   // 저장 실패

                alert('저장에 실패했습니다. 다시 시도해주세요.');
            } else {           // 저장 성공
                alert('저장했습니다.')
            }
        } catch(e) {
            console.log('error!', e);
        }

    }
    return (
        <div>

            <HeadMenuAdmin />
            <header>----------------------------------</header>
            <h1>Admin Info</h1>
            {info && <li>제목: <textarea name = "title" placeholder="제목" value={info.title} onChange={onChange} maxLength={50} /></li>}
            {info && <li>부제목: <textarea name = "subtitle" placeholder="부제목" value={info.subtitle} onChange={onChange} maxLength={100} /></li>}
            {info && <li>본문: <textarea name = "content" placeholder="본문" value={info.content} onChange={onChange} maxLength={800} /></li>}
            <button type="submit" onClick={onClick}>저장</button>
        </div>
    );
}