import React from 'react';
import { connect } from 'react-redux';
import {fetchStream,editStream } from '../Actions';
import StreamForm from '../streams/StreamForm';
import _ from 'lodash';

// passing a props to know the properties value of streamedit.
class StreamEdit extends React.Component{

    //we use componentdid mount just because of render its intial state value
    componentDidMount(){
        //FETCHING DATA FROM FETCHSTREAM WITH ITS PARAM ID
           this.props.fetchStream(this.props.match.params.id);
    }

     onSubmit = (formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues);
     };
 
    render(){
        if(!this.props.stream){
                 return <div>LOOOOOOOOOAAAAAAADDDDDDIIIIINNNNGGGGG</div>;
        }
         return (
                <div>
                    <h3>Edit the Stream</h3>
                    <StreamForm 
                    initialValues={_.pick(this.props.stream,'title','description')}
                    onSubmit={this.onSubmit}/>
                </div>
            );
 }

};


//using selection Record from State.
//ownProps is same content props which is written in the same file.
//In mapStateToProps we are return streams from state object with its id.
const mapStateToProps =(state,ownProps)=>{
    return{stream:state.streams[ownProps.match.params.id]};
};


export default connect(
    mapStateToProps,
    {fetchStream,editStream}
    )(StreamEdit);