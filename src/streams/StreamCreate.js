import React from 'react';
import {Field , reducerForm} from 'redux-form';


class StreamCreate extends React.Component{
  render(){
       return (
            <form>
                <Field name = "title" />
                <Field name = "description"/>
            </form>
       )
  }
}

export default reducerForm({
    form : reducerForm
})(StreamCreate)