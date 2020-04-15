import React, { useState, useEffect } from "react";
// import friends from "../../utils/friendList.json";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import httpClient from "../../httpClient.js";

// import FriendsModal from "../FriendsModal";

function Card(currentUser) {
    //setup currently logged in user

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });

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

    const usersFriends = currentUserObj.currentUser.friends.slice(1);
    console.log('slice', usersFriends)


    return ( 
            <>
            <br/>
                <div className="tile is-3 container column is-fluid" >
                <div className="tile is-child box has-text-centered" id="pinkDuck">
                    {usersFriends.map(
                        item => (
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
                    )}
                </div>
                </div>
            </>
        );
    }

export default withRouter(Card);