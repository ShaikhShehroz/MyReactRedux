import {combineReducers} from 'redux';

import authReducer from '../Reducers/authreducer';

export default combineReducers ({
    auth : authReducer
});