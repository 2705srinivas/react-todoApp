const action = {
    udpate_Currencies: "UPDATE_CURRENCIES",
    updateCurrencies: (payload)=>({
        type:action.udpate_Currencies,payload
    })
};

export default action;