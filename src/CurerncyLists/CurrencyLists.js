import React from 'react';
import {Table} from 'antd';

const CurrencyLists = (props)=>{
    const columns=[{
        title:"Currency",
        dataIndex:"currency",
        key:"currency"
    },
    {
        title:"Rate",
        dataIndex:"rate",
        key:"rate"
    },
    {
        title:"Value",
        dataIndex:"value",
        key:"value"
    }];

    return(<Table columns={columns} dataSource={props.currencies}/>);
}

export default CurrencyLists;