import blogReducer from './blog/reducer';
import userReducer from './user/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Blog: blogReducer,
    User: userReducer
})

export default rootReducer;