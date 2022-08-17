import initStore from './initStore';


const productsReducer = (state = initStore, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
            }
        case 'PRODUCTS_INCREMENT':
            return {
                ...state,
                count:state.count + 1,
            }
        case 'PRODUCTS_DECREMENT':
            return {
                ...state,
                count:state.count - 1,
            }
        default:
            return state;
    }
}

export default productsReducer;