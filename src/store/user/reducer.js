import { LOGOUT, LOGIN } from '../actionType';

const initialState = {
    user: {
        username: '',
    },
    token: 'sfsf=13231313'  // chưa login
}

function useReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                token: ''
            }
        case LOGIN:
            console.log('action: ', action.payload)
            return {
                ...state,
                user: {
                    username: action.payload.username
                },
                token: 'sfsf=13231313' + action.payload.username
            }
        default:
            return state;
    }
}

export default useReducer;