import {Link} from "react-router-dom";
import React from "react";
import {Button, Col, Divider, Row} from 'antd';

const HeadMenu: React.FC = () =>  {
    return(
        <>
            <Row>
                <Col flex="auto"></Col>
                <Col flex="50px"><Link to='/login'>Login</Link></Col>

            </Row>

    <Row justify="end">
        <Col span={2}><Button type="text" size="middle"><Link to='/'>Home</Link></Button></Col>
        <Col span={2}><Button type="text" size="middle"><Link to='/info'>Information</Link></Button></Col>
        <Col span={2}><Button type="text" size="middle"><Link to='/product'>Product</Link></Button></Col>
        <Col span={2}><Button type="text" size="middle"><Link to='/notice'>Notice</Link></Button></Col>
        <Col span={2}><Button type="text" size="middle"><Link to='/contact'>Contact</Link></Button></Col>
    </Row>

        </>

    );

}
export default HeadMenu;