import { Col, Row } from 'antd';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import HeadMenu from "./headMenu";
import {Table} from "antd";
import {Typography} from "antd";
const { Title} = Typography;


const NoticeDetail = () => {
    const { noticeId } = useParams();
    const [noticeDetail, setNoticeDetail] = useState({
        id : '',
        title : '',
        content : '',
        noticeDate : ''
    })
    useEffect(() => {
        axios.get('/notice/'.concat(noticeId))
            .then(response => {
                    setNoticeDetail(response.data);
                    console.log(response.data);
                }
            )
            .catch(error => console.log(error))
    }, []);
    return (
        // <div>
        //     <HeadMenu />
        //     <h1> Notice Detail</h1>
        //     {noticeDetail && <li>제목: {noticeDetail.title}</li>}
        //     {noticeDetail && <li>게시일: {noticeDetail.noticeDate}</li>}
        //     <li>작성자 : 관리자</li>
        //     {noticeDetail && <li>내용: {noticeDetail.content}</li>}
        //
        // </div>
    <div>
        <HeadMenu />
        <div style={{padding:"50px"}}>
            <div style={{padding:"10px"}}>
                <Title>Notice</Title>
                <br/>
                <table style={{borderTop: "1px solid #444444", borderBottom:"1px solid #444444", borderCollapse:"collapse", margin:"auto"}}>
                    <tr>
                        <td width={"100"}> <h3> No.{noticeDetail.id} </h3></td>
                        <td width={"800"}> <h3>{noticeDetail.title}</h3> </td>
                        <td width={"80"}> <h3> 작 성 자 </h3> </td>
                        <td width={"80"}> <h3> 관리자 </h3> </td>
                        <td width={"80"}>
                            <h3>게시일</h3>
                        </td >
                        <td width={"200"}> <h4>{noticeDetail.noticeDate}</h4> </td>
                    </tr>
                </table>
                <br/>
                <div style={{paddingTop: "500"}}>
                    {noticeDetail.content}
                </div>


            </div>
        </div>
    </div>
    );
}



export default NoticeDetail;