import {createStore} from "redux";

const INTI_VALUE={
    counter:0,
    privacy:false
}
const counterReducer =(store=INTI_VALUE,action)=>{
    if(action.type==="INC"){
        return {...store,counter:store.counter+1}
    }
    else if(action.type==="DEC"){
        return {...store,counter:store.counter-1}
    }
    else if(action.type==="ADD"){
        return {...store,counter:store.counter+Number(action.payload.num)}
    }
    else if(action.type==="SUB"){
        return {...store,counter:store.counter-Number(action.payload.num)}
    }
    else if(action.type==="PRIVACY_TOGGLE"){
        return {...store,privacy:!store.privacy}
    }
    
    return store;
}

const CounterStore= createStore(counterReducer);

export default CounterStore;