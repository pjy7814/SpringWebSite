import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Row} from "antd";

export default function HeadMenuAdmin() {

    //로그아웃버튼
    const onClick = async () =>  {
        try {
            const response = await axios.post('/logout', {

                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                    document.location.href = '/'
                }
            )
            console.log("logout", response)
        } catch(e) {
            console.log('error!', e);
        }


    }

    return(
        <>
            <Row>
                <Col flex="auto"></Col>
                <Col flex="50px"><Link type="submit" onClick={onClick}>Logout</Link></Col>

            </Row>

            <Row justify="end">
                <Col span={2}><Button type="text" size="middle"><Link to='/'>Home</Link></Button></Col>
                <Col span={2}><Button type="text" size="middle"><Link to='/infoAdmin'>Information</Link></Button></Col>
                <Col span={2}><Button type="text" size="middle"><Link to='/productAdmin'>Product</Link></Button></Col>
                <Col span={2}><Button type="text" size="middle"><Link to='/noticeAdmin'>Notice</Link></Button></Col>
                <Col span={2}><Button type="text" size="middle"><Link to='/contactAdmin'>Contact</Link></Button></Col>
            </Row>

        </>

    );
}