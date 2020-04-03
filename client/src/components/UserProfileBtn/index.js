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
            <div onClick={handleToggle}>{friendAdd ? <UnFriendBtn /> : <AddFriendBtn />}
                <Link to="/transfermoney" className="button is-light" id="sendMoney">Send Money</Link>
            </div>

        </>
    );
}

export default UserProfileBtn;