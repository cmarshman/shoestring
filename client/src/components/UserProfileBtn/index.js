import React, { useState } from 'react';
import './style.css';
import AddFriendBtn from '../AddFriendBtn';
import UnFriendBtn from '../UnFriendBtn';
import { Link } from 'react-router-dom';

function UserProfileBtn() {
    const [friendAdd, setFriendAdd] = useState(false)

    const handleToggle = () => {
        setFriendAdd(friendAdd => !friendAdd)
    }

    return (
        <>
            <div onClick={handleToggle}>{friendAdd ? <AddFriendBtn /> : <UnFriendBtn />}
                <Link to="/transfermoney" className="button is-dark" id="deposit">Send Money</Link>
            </div>

        </>
    );
}

export default UserProfileBtn;