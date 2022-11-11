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
            <table style={{margin:"auto", width: "100%"}}>
                <tr>
                    <Row justify="end">
                        <td style={{margin: "20px"}}><Link to='/'>Home</Link></td>
                        <td style={{margin: "20px"}}><Link to='/info'>Information</Link></td>
                        <td style={{margin: "20px"}}><Link to='/product'>Product</Link></td>
                        <td style={{margin: "20px"}}><Link to='/notice'>Notice</Link></td>
                        <td style={{margin: "20px"}}><Link to='/contact'>Contact</Link></td>
                    </Row>
                </tr>
            </table>

        </>

    );

}
export default HeadMenu;