import { createStore } from 'redux';

const initialState = {
    count:10,
    userData:{
        name:'John',
    }
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count:state.count + 1,
                ...state,
            }
        case 'DECREMENT':
            return {
                count:state.count - 1,
                ...state,
            }
        case 'SET_NAME':
            return {
                userData:{
                    name:action.name,
                },
                ...state,
            }
        default:
            return state
    }
}


const store = createStore(reducer, initialState);


export default store;