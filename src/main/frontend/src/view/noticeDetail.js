import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import HeadMenu from "./headMenu";

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
        <div>
            <HeadMenu />
            <h1> Notice Detail</h1>
            {noticeDetail && <li>제목: {noticeDetail.title}</li>}
            {noticeDetail && <li>게시일: {noticeDetail.noticeDate}</li>}
            <li>작성자 : 관리자</li>
            {noticeDetail && <li>내용: {noticeDetail.content}</li>}

        </div>
    );
}

export default NoticeDetail;