import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/Landing.css';
import Friends from '../components/FriendCard';
import Plaid from './../components/plaidLink';
import NavBarAuth from '../components/NavBarAuth';
import UserNameCard from '../components/UserNameCard';
import AddImage from './../components/AddImage';
import Payments from './../components/Payments';
import moment from 'moment';



function Landing() {

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    
    //Load funtion on page load
    useEffect(() => {
        handleFriends()

    }, [])
        //Function to load all user on page load
        const handleFriends = () => {
            httpClient.FindAllUser()
                .then(serverResponse => {
                    let currentUserId = currentUserObj.currentUser._id
                    let findFriend = serverResponse.data.find(item => item._id === currentUserId)
                    setCurrentUserObj(findFriend)
                })
                .catch(err => { console.log(err) })
        }
    let createdDate1 = currentUserObj.date
    console.log(createdDate1)
    let createdDate = moment(createdDate1).format('LL');

    // Render the  all  the  pages on the landing pages
    return (
        <>
            {(currentUserObj.currentUser !== null) ? (
                <div>
                    <NavBarAuth />
                    <div className="outerTile">
                        <div className="is-clearfix columns is-centered">
                            <div className="tile is-9 container column is-fluid" id="purpleDuck">
                                <div className="tile is-vertical is-parent" >
                                    <div className="tile is-child box has-text-centered" >
                                        <div className="is-centered" >
                                            <UserNameCard />
                                            <AddImage />
                                            <br />
                                            <Plaid />
                                            <p id="funds">Funds Available: {currentUserObj.balance}</p>
                                            <p id="member">Member Since: {createdDate}</p>
                                        </div>
                                    </div>
                                    <div className="tile is-child box is-fullwidth">
                                        <Payments />
                                    </div>
                                </div>
                            </div>
                          <Friends/>
                        </div>
                    </div>
                </div>
            ) : window.location.replace("/")}

        </>
    )
}

export default Landing;


