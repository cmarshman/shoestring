import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/Landing.css';
import FriendCard from './../components/FriendCard';
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

    var createdDate = currentUserObj.currentUser.date
    console.log(createdDate)
    createdDate = moment().format('LL');

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
                                            <p id="funds">Funds Available: {currentUserObj.currentUser.amount}</p>
                                            <p id="member">Member Since: {createdDate}</p>
                                        </div>
                                    </div>
                                    <div className="tile is-child box is-fullwidth">
                                        {/* <p className="title" id="paymentList">Payments</p>
                                  <p>Lisa paid Arnold for Pizza</p>
                                  <p>Jeff paid Jesus for rent</p> */}
                                        <Payments />
                                    </div>
                                </div>
                            </div>
                            <FriendCard />
                        </div>
                    </div>
                </div>

            ) : window.location.replace("/")}

        </>
    )

}
export default Landing;


