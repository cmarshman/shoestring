import React, { useState } from 'react';
import './style.css';
import AddFriendBtn from '../AddFriendBtn';
import UnFriendBtn from '../UnFriendBtn';

function UserProfileBtn(){
    const [friendAdd, setFriendAdd] = useState(false)
    
    const handleToggle = () => {
        setFriendAdd(friendAdd => !friendAdd)
    }

    return(
        <> 
            <div  onClick={handleToggle}>{friendAdd ? <AddFriendBtn/> : <UnFriendBtn/> }
            <button className="button is-dark" id="deposit">Send Money</button>
            </div>

        </>
    );
}

export default UserProfileBtn;