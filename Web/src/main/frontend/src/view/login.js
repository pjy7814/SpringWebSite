import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import HeadMenu from "./headMenu";


const Login = () => {
    const navigate = useNavigate();
    const onClick = async (values: any) =>  {
        try {
            const response = await axios.post('/login', values,{

                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("login", response.data)

            if (response.data === "alert") {

                alert('로그인에 실패하였습니다. 다시 확인해주세요');
            } else {            // 로그인 성공 -> 페이지 이동
                // console.log('loginSuccess!')
                // document.location.href = '/admin'
                navigate('/admin')
            }
        } catch(e) {
            console.log('error!', e);
        }

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>

            <HeadMenu />

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onClick}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
                label="Id"
                name="id"
                rules={[
                    {
                        required: true,
                        message: '아이디를 입력해주세요!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="passwd"
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};
export default Login;