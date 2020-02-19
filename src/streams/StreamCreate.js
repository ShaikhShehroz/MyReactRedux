import React from 'react';
import {Field , reduxForm, formValues} from 'redux-form';
import {createStream} from '../../src/Actions';
import {connect} from 'react-redux';

class StreamCreate extends React.Component{
  renderError({error, touched}){
      if (touched && error){
          return(
              <div className ="ui error message">
                  <div className = "header">{error}</div>
              </div>
          );
      }

  }

      renderInput = ({input, label,meta}) => {
       //   1.New concept of (adding/showing) props in redux-form through {...input}.
       //   2.Adding meta.error for validation 
       const className = `field ${meta.error && meta.touched ? 'error':''}`;
       return(                                           
             <div classname= {className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>  
                    {this.renderError(meta)}
             </div>
             );   
        
       }

//calling createstream data on submit button

       onSubmit=formValues=>{
           this.props.createStream(formValues);
       };

  render(){
     
       return (
          
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className = "ui form error"
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

const formWrapped = reduxForm({
    form : 'StreamCreate',
    validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);