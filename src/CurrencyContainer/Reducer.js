import actions from './Action.js';

const initialState = {
    currencies:[{
        key:1,
        currency:"USD",
        rate:1.6,
        value:0
    },
    {
        key:2,
        currency:"GBP",
        rate:2.1,
        value:0
    },
    {
        key:3,
        currency:"EUR",
        rate:1.69,
        value:0
    },
    {
        key:4,
        currency:"EGP",
        rate:2.25,
        value:0
    }]
}

const Reducer = (state=initialState,{type,payload})=>{
    switch (type)
    {
        case actions.udpate_Currencies:
            console.log("inside render",payload);
            return payload;
        default:
            return state;
    }
}

export default Reducer;