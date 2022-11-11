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
            <table style={{margin:"auto", width: "100%"}}>
                <tr>
                    <Row justify="end">
                        <td style={{margin: "20px"}}><Link to='/'>Home</Link></td>
                        <td style={{margin: "20px"}}><Link to='/infoAdmin'>Information</Link></td>
                        <td style={{margin: "20px"}}><Link to='/productAdmin'>Product</Link></td>
                        <td style={{margin: "20px"}}><Link to='/noticeAdmin'>Notice</Link></td>
                        <td style={{margin: "20px"}}><Link to='/contactAdmin'>Contact</Link></td>
                        <td style={{margin: "20px"}}><Link to='/mypage'>My Page</Link></td>
                    </Row>
                </tr>
            </table>

        </>

    );
}