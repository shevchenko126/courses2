import initStore from "./initStore";

const userReducer = (state = initStore, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name,
                },
            }
        default:
            return state;
    }
}

export default userReducer;