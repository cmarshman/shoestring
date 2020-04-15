
import React, { useState, useEffect } from "react";
// import friends from "../../utils/friendList.json";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import httpClient from "../../httpClient.js";
import FriendsModal from '../FriendsModal/index';


function Card(currentUser, props) {

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
    const [friendResult, setFriendResult] = useState([])

    const usersFriends = currentUserObj.currentUser.friends;

    // const addfriend = (evt) => {
    //     const friendId = evt.target.dataset.myfriend
    //     friendToAdd = usersFriends.find(item => item._id === friendId)
    //     console.log(" Hello1 ", friendToAdd)
    //     setFriendResult([friendToAdd]);
    // }

    return (

        <div className="tile is-child box has-text-centered" id="pinkDuck">

            {usersFriends.map(item => (
                <article key={item._id} className="media is-scrollable friend" id="friendSelector" data-friend={item._id}>
                    <figure className="media-left" id="block">
                        <p className="image is-square is-48x48" id="friendPic">
                            <img className="is-rounded" src={item.image} alt="userImage" />
                        </p>
                    </figure>
                    <div>
                        <p>{item.name}</p>

                        <h3 className="has-text-left" id="location">{item.location}</h3>

                    </div>
                </article>
            )
            )}<FriendsModal />

        </div>

    );
}

export default withRouter(Card);

