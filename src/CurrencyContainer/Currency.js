import React from 'react';
import {Input, Button, Form} from 'antd';

const Currency =(props) => {
    return (
        <Form onSubmit={props.onConvertClick}>
            <Form.Item>
                <Input placeholder="Indian Rupees" value={props.currencyValue} onChange={props.onCurrencyValueChange}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Convert</Button>
            </Form.Item>
        
        </Form>
    );
}

export default Currency;