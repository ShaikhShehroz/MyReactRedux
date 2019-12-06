import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = ()=>{
    return (
<div className="ui Secondary pointing menu">
    <Link to="/" className="Item">
        Streamy
    </Link>
    <div className="right menu">
    <Link to="/" className="Item">
        All Streams
    </Link>
    <GoogleAuth /> 
    </div>

</div>


    );
};

export default Header