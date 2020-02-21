import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from '../Reducers/authreducer';
import streamReducer from '../Reducers/streamReducer';

export default combineReducers ({
    auth : authReducer,
    form : formReducer,
    streams : streamReducer
});