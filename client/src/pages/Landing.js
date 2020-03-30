import React from 'react';
import './design/Landing.css'
import FriendCard from './../components/FriendCard';
import SubNav from '../components/SubNav'
import NavBarAuth from '../components/NavBarAuth';
import JT_square from '../images/Team/JT_square.png'; //to be replaced with user photo later
// import AddImage from './../components/AddImage';

function Landing() {
    return (
        <div>
            <NavBarAuth />
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-7 is-vertical is-parent">
                            <div className="tile is-child box">
                                <figure className="image is-128x128">
                                    <img className="is-rounded" id="userPic" src={JT_square} />
                                    <button id="addImage">Add profile picture</button>
                                </figure>
                                {/* //                             <AddImage /> */}
                                <br />
                                <p className="title" id="username">JT Turner</p>
                                <p id="funds">Funds Available: $100</p>
                                <p id="member">Member Since: April 2019</p>
                            </div>
                            <div className="tile is-child box">
                                <p className="title" id="paymentList">Payments</p>
                                <p>Lisa paid Arnold for pizza</p>
                                <p>Jeff paid Jesus for rent</p>
                            </div>

                        </div>
                        <FriendCard />
                    </div>
                </div>
            </div>
        </div>



    )
}


export default Landing;