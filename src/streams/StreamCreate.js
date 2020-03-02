//import {Field , reduxForm, formValues} from 'redux-form';
//import {Field , reduxForm} from 'redux-form';
import React from 'react';
import {createStream} from '../../src/Actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
  
    onSubmit = formValues =>{
        this.props.createStream(formValues);
    };

  render(){
     
       return (
           <div>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
          </div>       
       )
     }
}

export default connect(null,{createStream})(StreamCreate);