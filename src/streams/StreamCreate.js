import React from 'react';
import {Field , reduxForm, formValues} from 'redux-form';

class StreamCreate extends React.Component{
  renderError({error, touched}){

  }

      renderInput = ({input, label,meta}) => {
       //   1.New concept of (adding/showing) props in redux-form through {...input}.
       //   2.Adding meta.error for validation 
        return(                                           
             <div classname= 'field' >
                    <label>{label}</label>
                    <input {...input} autoComplete="OFF"/>  
                    <div>{meta.error}</div>  
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

// creating function of Validation
const validate = formValues =>{
    const error = {};

    if(!formValues.title){
        error.title = "You Miss the Title";
    }

    if(!formValues.description){
        error.description = "You Miss the Description";
    }
    return error;
}





export default reduxForm({
    form : 'StreamCreate',
    validate
})(StreamCreate);