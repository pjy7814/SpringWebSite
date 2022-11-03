import { Table } from 'antd';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeadMenu from "./headMenu";
import {Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Typography} from "antd";
const { Title} = Typography;



function Notice() {
    const [notice, setNotice] = useState([])

    useEffect(() => {
        axios.get('/notice')
            .then(response => {
                    setNotice(response.data);
                    console.log(notice)
                }
            )
            .catch(error => console.log(error))
    }, []);

    // const NoticeMap = notice.map((noti) =>
    //     <Link to={"/notice/".concat(noti.id)}><li>{noti.id} {noti.title} {noti.noticeDate.split(" ")[0]}</li></Link>
    // );
    return (
        <div>
            <HeadMenu />
            <div style={{padding:"50px"}}>
                <div style={{padding:"10px"}}>
                    <Title>Notice</Title>
                    <Table
                        columns={columns}
                        dataSource={notice}
                        pagination={{
                            pageSize: 10,
                        }}
                        scroll={{
                            y: 240,
                        }}
                        rowKey={notice.id}
                    />
                </div>
            </div>
        </div>
    )
}
export default Notice;


const columns = [
    {
        title: 'No.',
        dataIndex: 'id',
        key: 'id',
        width: 100,
    },
    {
        title: '제 목',
        dataIndex: 'title',
        key: 'title',
        render: (_, record) => (

            <a href={("/notice/".concat(record.id))}>{record.title}</a>
        )
    },
    {
        title: '작성자',
        render: () => (<div>관리자</div>),
        width: 200,
    },
    {
        title: '게시일',
        dataIndex: 'noticeDate',
        width: 200,
    },
];
