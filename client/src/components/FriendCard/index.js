import React, { useState } from "react";
// import friends from "../../utils/friendList.json";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import httpClient from "../../httpClient.js";
import Modal from '../Modal/index';


function Card(currentUser) {

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
    //variable for user's friends list
    let usersFriends = currentUser[0].friends;
    const addfriend = (evt) => {
        const friendId = evt.target.dataset.myfriend
        const friendToAdd = usersFriends.find(item => item._id === friendId)
        console.log(" Hello ", friendToAdd)
        this.props.history.push('/')
        alert(friendToAdd)
        //setCurrentUserObj(friendToAdd);
        //usersFriends = friendToAdd;
        // httpClient.InsertUpdate({
        //     _id: currentUserObj.currentUser._id,
        //     friends: [...currentUserObj.currentUser.friends, { image: friendToAdd.image, name: friendToAdd.name, city: friendToAdd.city, state: friendToAdd.state }]
        // })
    }
    console.log(" Hello ", usersFriends)




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

                        {/* <Link to={`/user-profile/${item.name}`} className="title is-5" id={item.name} data-friend={item._id} onClick= {addfriend} >{item.name}</Link> */}

                        <a href={`/user-profile/ ${item.name}`}
                            id="friend" data-myfriend={item._id}
                            onClick={addfriend}>
                            {item.name}
                        </a>


                        <h3 className="has-text-left" id="location">{item.city}</h3>
                    </div>

                </article>

            )
            )}
            <Modal/>
        </div>

    );
}

export default withRouter(Card);

