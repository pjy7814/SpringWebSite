import {Button, Col, Row, Table, Typography} from "antd";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import HeadMenu from "../../headMenu";
import HeadMenuAdmin from "../headMenuAdmin";
const { Title} = Typography;

function NoticeAdmin() {
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
            <HeadMenuAdmin />
            <div style={{padding:"50px", height:"auto"}}>
                <div style={{padding:"10px"}}>
                    <Title>Notice</Title>
                    <br/>
                    <Table
                        columns={columns}
                        dataSource={notice}
                        pagination={{
                            pageSize: 10,
                        }}
                        scroll={{
                            y: 500,
                        }}
                    />
                    <Row>
                        <Col flex="auto"></Col>
                        <Col flex="50px"><Button type="primary" to={"/noticeCreate"} size={'large'}><Link to={"/noticeCreate"}>글쓰기</Link></Button></Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default NoticeAdmin;

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