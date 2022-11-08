import {Input, Typography, Button, Col, Row} from 'antd';
import React, {useEffect, useState} from "react";
import axios from "axios";
import HeadMenuAdmin from "./headMenuAdmin";
import HeadMenu from "../headMenu";
import {Link} from "react-router-dom";
const { TextArea } = Input;
const { Title} = Typography;
export default function InfoAdmin() {
    const [info, setInfo] = useState({
        title: '',
        subtitle: '',
        content:'',
    })
    // const {title, subtitle, content} = info;
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div style={{padding:"50px"}}>
            <div style={{padding:"10px"}}>
                <Title>Information</Title>
                <br/>

                <table style={{margin:"auto", width: "100%"}}>
                    <tr>
                        <td> 본제목</td>
                    </tr>
                    <tr>
                        <td> <TextArea showCount rows={"1"} name = "title" placeholder="제목" value={info.title} onChange={onChange} maxLength={50} /></td>
                    </tr>
                    <tr>
                        <td> 부제목</td>
                    </tr>
                    <tr>
                        <td> <TextArea showCount rows={"1"} name = "subtitle" placeholder="부제목" value={info.subtitle} onChange={onChange} maxLength={100} /></td>
                    </tr>
                    <tr>
                        <td> 본문</td>
                    </tr>
                    <tr>
                        <td > <TextArea showCount rows={"20"} name = "content" maxLength={800} value={info.content} onChange={onChange} /></td>
                    </tr>
                    <br/>

                    <Row>
                        <Col flex="auto"></Col>
                        <Col flex="50px"><Button type="primary" size={'large'} onClick={onClick}>저장</Button></Col>
                    </Row>
                </table>
                <br/>


            </div>
        </div>
    </div>
    );
}