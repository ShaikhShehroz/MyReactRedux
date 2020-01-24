import React from 'react';
import {Field , reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

      renderInput ({input, label}) {
       //   New concept of (adding/showing) props in redux-form through {...input}.
        return(                                           
             <div classname= 'field' >
                    <label>{label}</label>
                    <input {...input}/>     
             </div>
             );   
        
       }
       onSubmit(formVariable){
           console.log(formVariable);
       };

  render(){
     
       return (
          
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className = "ui form"
            >
                <Field name = "title"  component ={this.renderInput} label ="Enter the Name" />
                <Field name = "description"  component ={this.renderInput} label = "Enter the Description" />

                <button className = "ui primary button">Submit</button>
            </form>

            
       );
  }
}

export default reduxForm({
    form : 'StreamCreate'
})(StreamCreate);