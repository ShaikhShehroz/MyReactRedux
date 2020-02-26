

import _ from 'lodash';  //using lodash library 
import {
  FETCH_STREAMS,  
  CREATE_STREAM,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../Actions/type'



export default (state = {},action)=>{
    switch (action.type){

        case FETCH_STREAMS :
            return {...state, ..._.mapKeys(action.payload,'id' )};

        case FETCH_STREAM :
            return {...state, [action.payload.id]:action.payload};

        case CREATE_STREAM :
            return {...state, [action.payload.id]:action.payload};
        case EDIT_STREAM  :
            return {...state, [action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload); // omit is lodash deleting keywords.
       
            default :
            return state;
    }
}