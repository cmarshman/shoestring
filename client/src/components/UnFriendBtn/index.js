import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function UnFriendBtn(){
    return(
        <>
        <Link to="/findafriend" className="button is-dark red-fish" id="deposit">Unfriend</Link>
        </>
    );
}

export default UnFriendBtn