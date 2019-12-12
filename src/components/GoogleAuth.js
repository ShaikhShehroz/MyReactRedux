
//In these we are playing with googleAuth and googleAPI js Libraray

import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../Actions';

class GoogleAuth extends React.Component{
   //here i m removing state to initialize mapStatetoProps
   // state = {isSignedIn:null};

   componentDidMount(){
    //here gapi.load we assign client auth paramater with one fnction
    //which contain the property of gapi as in Init with id and data.
    window.gapi.load('client:auth2',()=>{

        window.gapi.client.init({
        
           clientId:'271495339040-qr4vrj1mp6obqubhcs43glgk15cp65fe.apps.googleusercontent.com',
           scope:'email'
        }).then(()=>{
            // here we are giving promises once the output come it will in proper way
        this.auth = window.gapi.auth2.getAuthInstance();
        //we are changing the state if the .getAuthInstance value change//
      
//  this.setState({isSignedIn:this.auth.isSignedIn.get()}); //here i remove setstate just because we are not using state.//
     
 this.onAuthChange(this.auth.isSignedIn.get());  // we are using it because of removing state

        // here we adding listen property to authentication and making callback function event handler OnAuthChange.
        this.auth.isSignedIn.Listen(this.onAuthChange);
         }
        )
    });
    
   }

   //we are writing the function for eventhandler is it is update the state for that what should be function.
   /*onAuthChange=() => {
    this.setState({isSignedIn:this.auth.isSignedIn.get()});
   };*/

   onAuthChange= isSignedIn => {
       if (isSignedIn){
            this.props.signIn();
       }else{
           this.props.signOut();
       }
   
   };

   onSignInClick=()=>{
       this.auth.signIn();
   };

   onSignOutClick=()=>{
    this.auth.signOut();
};

// here we are rendering the AuthButton//
//if it is signedin then it will show i am signed in or if it is signed out the it is show i am not sign in
 /*  renderAuthButton(){
       if(this.state.isSignedIn===null){
           return<div>I dont know where i signed in </div>;
       }else if(this.state.isSignedIn){
           return <div>I am Signed in</div>;
       }else {
           return <div>I am Not Sign In</div>
       }
   }*/
   renderAuthButton(){
       //here i replace state with props
    if(this.props.isSignedIn === null){
        return null;
    }else if(this.props.isSignedIn){
        return (
             <button onClick={this.onSignOutClick} className="ui orange google button">
                 <i className ="google icon"/>
                 Sign Out 
             </button>

        );
    }else {
        return (
            <button onClick={this.onSignInClick} className="ui red google button">
                <i className ="google icon"/>
                Sign In with Google
            </button>

       )
    }
   }

   //here finally we are calling render button
    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
          
}

// mapstatetoprops we are intializing as a function for state to be called automatically

const mapStatetoProps = (state)=>{
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStatetoProps,
    {signIn,signOut}
) (GoogleAuth);
