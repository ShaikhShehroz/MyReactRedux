import React from 'react';
import { connect } from 'react-redux'
import {fetchStream } from '../Actions'

// passing a props to know the properties value of streamedit.
class StreamEdit extends React.Component{

    //we use componentdid mount just because of render its intial state value
    componentDidMount(){
        //FETCHING DATA FROM FETCHSTREAM WITH ITS PARAM ID
           this.props.fetchStream(this.props.match.params.id);
    }
 
    render(){
        if(!this.props.stream){
                 return <div>LOOOOOOOOOAAAAAAADDDDDDIIIIINNNNGGGGG</div>;
        }
         return (
                <div>
                    {this.props.stream.title}
                    <br />
                    {this.props.stream.description}
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
    {fetchStream}
    )(StreamEdit);