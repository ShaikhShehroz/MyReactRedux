// In action.js here we are assigning action to be held in browsers
import {SIGN_IN,SIGN_OUT} from './type';
export const signIn = ()=>{
  return{
      type : SIGN_IN
  };
};


export const signOut = () =>{
 return{
    type : SIGN_OUT
  };
};

