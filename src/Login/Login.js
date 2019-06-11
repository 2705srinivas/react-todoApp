import React from 'react';
import {Form, Input, Button, Card, Row, Column} from 'antd';

const Login = () =>{
    return(
        <Card style={{width:"33%",margin:"150px 400px"}}>
            <Form>
                <Form.Item>
                    <Input placeholder="Username or Email" type="Username"></Input>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Password" type="Password"></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default Login;