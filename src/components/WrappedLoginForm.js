import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {Navigate, NavLink, redirect} from "react-router-dom";
import {history} from "../utils/history";
import {login} from "../services/userService";


class WrappedLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    onFinish = (values) => {
        login(values,(data)=>{
            if(data!==0){
                alert("Login Success!");
                sessionStorage.setItem("bookstore login", data);
                this.setState({isLogin: true});
            }else {
                alert("Password incorrect!");
            }
        })
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        // console.log("render",this.state);
        return (
            (this.state.isLogin) ?
                <Navigate to="/home"/>
                :
                <div align="center">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 4,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 4,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div align="left">
                        <h1>以下是现有的两个用户：</h1>
                        <h2>username:tom</h2>
                        <h2>password:tom123</h2>
                        <h2>username:jerry</h2>
                        <h2>password:jerry123</h2>
                    </div>

                </div>

        )
    }
}


export default WrappedLoginForm;