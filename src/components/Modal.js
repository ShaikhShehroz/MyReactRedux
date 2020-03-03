import React from 'react';
import ReactDOM from 'react-dom';

// These we are using for portal. Modal mainly used for react portal 
const Modal = (props) =>{
 // returning new reactdom and creating a portal
  return ReactDOM.createPortal(   
  <div  onClick ={props.onDismiss} className ="ui dimmer modals visible active">
     <div 
     onClick ={(e)=> e.stopPropagation()} // using concept of  event propagation & bubbling.
     className = "ui standard modal visible active"
     >
        <div className = "header">{props.title}</div>
        <div className = "content">{props.content}</div>
        <div className ="actions">{props.actions}</div>
     </div>
  </div>,
    // modal has its own id in main html so we have to define it to index.html next to  rootid
    document.querySelector('#modal')
 );
};
export default Modal;