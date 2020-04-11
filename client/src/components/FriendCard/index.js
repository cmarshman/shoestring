import React, { useState } from "react";
// import friends from "../../utils/friendList.json";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import httpClient from "../../httpClient.js";


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

    const usersFriends = currentUser[0].friends;
    console.log(currentUserObj.currentUser.friends)

    return (
        
        <div className="tile is-child box has-text-centered" id="pinkDuck">
            {usersFriends.map(item => (
                <article key={item._id} className="media is-scrollable">
                    <figure className="media-left" id="block">
                        <p className="image is-square is-48x48" id="friendPic">
                            <img className="is-rounded" src={item.image} alt="userImage" />
                        </p>
                    </figure>
                    <div>

                        <Link to={`/user-profile/${item.name}`} className="title is-5" id={item.name}>{item.name}</Link>

                        <h3 className="has-text-left" id="location">{item.city}</h3>
                    </div>

                </article>
            ))}
        </div>

    );
}

export default withRouter(Card);