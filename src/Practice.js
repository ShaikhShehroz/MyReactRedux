import actions from "redux-form/lib/actions";
import { EDIT_STREAM } from "./Actions/type";
import streams from "./apis/streams";


// Array based approach


const Reducers = (state = [], action) => {

switch (action.type){
    case EDIT_STREAM :
        return state.map(streams=>{
            if(streams.id === actions.payload.id){
                return action.payload;
            }else{
                return streams;
            }
            
         });
         default :
             return state;
       }
};

// object based approach

const Reducers = (state={},action)=>{
   switch(action.type){
       case EDIT_STREAM:
           return{...state, [action.payload.id]:action.payload };

       default : 
           return state;
   }
};