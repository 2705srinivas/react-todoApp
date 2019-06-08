import React from 'react';
import CurrencyList from './CurrencyLists.js';
import {connect} from 'react-redux';

class CurrencyListContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Currencylistcontainer",this.props.currency);
        return(<CurrencyList 
                currencies={this.props.currency}/>);
    }
}

const mapStateToProps = (state)=>{
    console.log("Get",state);
    return{
        currency: state.currencyStore.currencies
    }
}

export default connect(mapStateToProps)(CurrencyListContainer);