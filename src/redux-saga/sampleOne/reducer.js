import actions from './acctions';

const initState = {
    test:''
}

export default function reducre(state = initState,{type,payload}) {
    switch (type) {
        case actions.ACTION_NAME:
            return {
                ...state,
                test:'Fahad Test'
            }    
        default:
           return state;
    }
}