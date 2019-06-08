import React from 'react';
import Currency from './Currency.js';
import {connect} from 'react-redux';
import actions from './Action.js';

class CurrencyContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currencyValue:''
        }
    }

    onCurrencyValueChange = (e)=>{
        this.setState({
            currencyValue : e.target.value
        })
    }

    onConvertClick = (e) =>{
        e.preventDefault();
        const inrvalue = this.state.currencyValue;

        const newState = JSON.parse(JSON.stringify(this.props.currency));
        newState.currencies.map((currency)=>{
            currency.value = inrvalue * currency.rate;
        });
        
        //console.log("newstate",newState);

        this.props.actionpush(newState);
    } 
    
    render(){
        return( 
        <Currency 
                currencyValue={this.state.currencyValue}
                onCurrencyValueChange={this.onCurrencyValueChange}
                onConvertClick={this.onConvertClick}
        />);
    }
}

const mapStateToProps = (state)=>{
    return{
        currency: state.currencyStore
    }
}

const mapDispatchToProps = {
    actionpush: actions.updateCurrencies
}


export default connect(mapStateToProps,mapDispatchToProps)(CurrencyContainer);