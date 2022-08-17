import { createStore, combineReducers } from 'redux';
import productsReducer from './products'
import userReducer from './user'

const store = createStore(combineReducers({
    products: productsReducer,
    user: userReducer,
}));


export default store;