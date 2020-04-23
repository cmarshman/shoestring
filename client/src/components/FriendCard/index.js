import React, { useState, useEffect } from "react";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import httpClient from "../../httpClient.js";

// import FriendsModal from "../FriendsModal";

function Card(currentUser) {
    //setup currently logged in user

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });

    const [friendResult, setFriendResult] = useState([{}]);

     //Load funtion on page load
     useEffect(() => {
        handleFriends()
     }, [])

    const usersFriends = currentUserObj.currentUser.friends.slice(1);
    console.log('slice', usersFriends)

//Function to load all user on page load
const handleFriends = () => {
    httpClient.FindAllUser()
   
        .then(serverResponse => {
           setFriendResult(serverResponse.data);
            let currentUserId = currentUserObj.currentUser._id
            let findFriend = serverResponse.data.find(item => item._id === currentUserId)
            let friendsArray = findFriend.friends.slice(1)
            console.log("inside", friendsArray)
           setFriendResult(friendsArray)
          
        })
        .catch(err => { console.log(err) })            
}

//Render all the logged in user Friends
    return ( 
            <>
            <br/>
                <div className="tile is-3 container column is-fluid" >
                <div className="tile is-child box has-text-centered" id="pinkDuck">
                { friendResult.map(item =>{ 
                         return (
                        <article key={item._id} className="is-scrollable friend" id="friendSelector" >
                            <figure id="block">
                                <p className="image has-text-centered" id="friendPic">
                                <div className="is-centered">
                                <img className="is-rounded is-48x48" id="userPhoto" src={item.image} alt={item.name} />
                                </div>
                                {item.name}
                                </p>
                            </figure>
                            <div>
                                <Link to='/transfermoney'>
                                <h3 className="has-text-centered" id="location">{item.city}</h3>
                                </Link>
                            </div>
                            <hr/>
                        </article>
                    )
                  } 
                )}  

              </div>
            </div>
            </>
        );
    }

export default withRouter(Card);