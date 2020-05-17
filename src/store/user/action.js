import { LOGOUT, LOGIN } from '../actionType';

export const actLogout = () => {
    return {
        type: LOGOUT
    }
}

export const actLogin = (value) => {
    return {
        type: LOGIN,
        payload: value
    }
}