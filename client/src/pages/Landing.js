import React from 'react';
import Navbar from './../components/navbar';
import './design/Landing.css'
import FriendCard from './../components/FriendCard';
function Landing() {
    return (
        <div>
            <Navbar />
            <div className="outerTile">
                <div className="tile is-10 container is-fluid">
                    <div className="tile is-7 is-vertical is-parent">
                        <div className="tile is-child box">
                            <figure className="image is-128x128">
                                <img id="userPic" src="https://bulma.io/images/placeholders/128x128.png" />
                                <button id="addImage">Add profile picture</button>
                            </figure>
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
                    <FriendCard/>
                    {/* /// */}
                    {/* <div className="tile is-3 is-child box">
                        <p className="title" id="friendList">Friends</p>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Sean Brown</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Naomi Campbell</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Jhene Aiko</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Billy Rae Cyrus</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Michael Jordan</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Megan</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div> */}
                     {/* /// */}
                </div>
            </div>
        </div>



    )
}

export default Landing;