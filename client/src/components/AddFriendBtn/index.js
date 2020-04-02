import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function AddFriendBtn() {
    return(
        <>
        <Link to="/findafriend" className="button is-dark red-fish" id="deposit">Add Friend</Link>
        </>
    );
}

export default AddFriendBtn;