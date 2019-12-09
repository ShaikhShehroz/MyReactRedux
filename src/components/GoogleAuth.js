
//In these we are playing with googleAuth and googleAPI js Libraray

import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn:null};

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
        this.setState({isSignedIn:this.auth.isSignedIn.get()});
       // this.onAuthChange();
        // here we adding listen property to authentication and making callback function event handler OnAuthChange.
        this.auth.isSignedIn.Listen(this.onAuthChange);
         }
        )
    });
    
   }

   //we are writing the function for eventhandler is it is update the state for that what should be function.
   onAuthChange=() => {
    this.setState({isSignedIn:this.auth.isSignedIn.get()});
   };

   onSignIn=()=>{
       this.auth.signIn();
   };

   onSignOut=()=>{
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
    if(this.state.isSignedIn===null){
        return null;
    }else if(this.state.isSignedIn){
        return (
             <button onClick={this.onSignOut} className="ui orange google button">
                 <i className ="google icon"/>
                 Sign Out 
             </button>

        );
    }else {
        return (
            <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;
