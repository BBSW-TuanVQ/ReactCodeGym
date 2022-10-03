import { DELETE_USER_SUCCESS, GET_USER_SUCCESS } from "./action"
const initialState = {
    users: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS: 
            return {...state, users: action.payload}
        // case DELETE_USER_SUCCESS:
        //     return {...state, users: action.payload}
        default: 
            return state;
    }
}

export default rootReducer;