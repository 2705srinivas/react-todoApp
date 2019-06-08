import React from 'react';
import { Row,Col,Card } from 'antd';
import CurrencyContainer from './CurrencyContainer/CurrencyContainer.js';
import CurrencyListContainer from './CurerncyLists/CurrencyListsContainer.js'

const CurrencyRoot = () => {
    return (
        <>
            <Row style={{margin:"50px 0px 0 300px"}}>
                <Col span={16} >
                    <Card style={{border:"solid"}}>
                        <CurrencyContainer />
                    </Card>
                </Col>
            </Row>
        
        
            <Row style={{margin:"0px 0px 0 300px"}}>
                <Col span={16}>
                    <Card style={{border:"solid"}}>
                        <CurrencyListContainer />
                    </Card>
                </Col>
            </Row>
        
        </>
    );
}

export default CurrencyRoot;