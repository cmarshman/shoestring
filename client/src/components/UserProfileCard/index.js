import React, { useState, useEffect } from "react";
import './style.css';
// import James from '../../images/friendPhotos/james_horton.jpg';
import UserProfileBtn from '../UserProfileBtn';
import friends from '../../utils/friendList.json';
import httpClient from '../../httpClient.js';


function UserProfileCard(currentUser, props) {
  //setup currently logged in user
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
});

//console.log('props', props.friendId)
useEffect(() => {
    // handleSearchSubmit();
     //handleSearch();
     
     //setFriendResult(friendResult) ;   

  }, [])


    currentUser = [
      {
        _id: currentUserObj.currentUser._id,
        friends: currentUserObj.currentUser.friends,
        name: currentUserObj.currentUser.name,
        phone: currentUserObj.currentUser.phone,
        city: currentUserObj.currentUser.city,
        state: currentUserObj.currentUser.state,
        email: currentUserObj.currentUser.email,
        password: currentUserObj.currentUser.password,
        image: currentUserObj.currentUser.image,
    }
]
const usersFriends = currentUser[0].friends;
 
//console.log(" Hello ", friendResult)
return(
        <>
        {/* {friendResult.length > 0 ?( */}

        {usersFriends.map(item =>{
         return(
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-7 is-vertical is-parent"  id="wallet">
                            <div className="tile is-child box has-text-centered">
                                <a className="" href={`/user-profile/ ${item.name}`}>
                                    <img className="is-rounded is-256x256" src={item.image} 
                                    data-friends = {item._id} alt="James Horton"
                                    />
                    
                                <h1 className="title">
                                    {item.name}
                                     
                                </h1>
                                </a>
                                <h2 className="subtitle">
                                    Member Since: April 2020
                                </h2>
                                <UserProfileBtn/>
                            </div>
                        </div>
                    </div>
                </div>
 
        </div>
         )
        })
} 
        
        </>
    );
}

export default UserProfileCard;