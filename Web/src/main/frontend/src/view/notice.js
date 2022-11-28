import styles from './Footer.module.css';
import { Table } from 'antd';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeadMenu from "./headMenu";
import Footer from "./footer";
import {Typography} from "antd";
import {Link} from "react-router-dom";
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

    return (
        <div>
            <HeadMenu />

            <main className={styles.main}>
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
                        />
                    </div>
                </div>
            </main>

            <Footer />
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

            <Link to={("/notice/".concat(record.id))}>{record.title}</Link>
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
