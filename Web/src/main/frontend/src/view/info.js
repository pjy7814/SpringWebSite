import { Divider, Typography } from 'antd';
import HeadMenu from "./headMenu";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Footer from "./footer"
import styles from './Footer.module.css';
const { Title, Paragraph, Text, Link } = Typography;


function Info() {
    const [info, setInfo] = useState({
        title: '',
        subtitle: '',
        content:'',
    })

    useEffect(() => {
        axios.get('/info')
            .then(response => {
                    setInfo(response.data);
                    console.log(response.data);

                }
            )
            .catch(error => console.log(error))
    }, []);

    return (

        <div>
            <HeadMenu />
        <br/>
            <main className={styles.main}>
                <div style={{padding:"50px"}}>
                    <div style={{padding:"10px"}}>
                        <Title>Introduction</Title>
                        <Typography>

                            {info &&  <Title level={2}> {info.title}</Title>}
                            {info && <Title level={5}> {info.subtitle}</Title>}
                            {info && <Paragraph > {info.content}</Paragraph>}
                        </Typography>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}



export default Info;