//import React from 'react';
import './design/Landing.css'
import FriendCard from './../components/FriendCard';
import SubNav from '../components/SubNav'
import NavBarAuth from '../components/NavBarAuth';
import JT_square from '../images/Team/JT_square.png'; //to be replaced with user photo later
// import AddImage from './../components/AddImage';
import login from './Login'
import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import Axios from 'axios';
import { get } from 'mongoose';

function Landing(currentUser) {
 
    const [currentUserObj, setCurrentUserObj] = useState({
         currentUser: httpClient.getCurrentUser()
       
    })

    // Load the available token on pageload from local storage
    //async 
    useEffect(() => {
         onLoginSuccess()
         data :{}
        //loadUser()
    }, [ ])


	const onLoginSuccess= () =>{
        // setCurrentUserObj({ currentUser: httpClient.getCurrentUser(user) })
        // //console.log("logged " , props.currentUser)
        console.log("currentUserObj " , currentUserObj)

        setCurrentUserObj ({
            firstName: currentUserObj.currentUser.firstName,
            lastName: currentUserObj.currentUser.lastName,
            phone: currentUserObj.currentUser.phone,
            email: currentUserObj.currentUser.email,
            password: currentUserObj.currentUser.password,
            checked: true
        })
        console.log("currentUserObj " , currentUserObj.currentUser.firstName)
	}//

    // setCurrentUserObj ({
    //     firstName: currentUserObj.firstName,
    //     lastName: currentUserObj.lastName,
    //     phone: currentUserObj.phone,
    //     email: currentUserObj.email,
    //     password: currentUserObj.password,
    //     checked: true
    // })


	const logOut =() =>{
		httpClient.logOut()
		setCurrentUserObj({ currentUser: null })
	}
	
 

  // Loads all books and sets them to books
      function loadUser(data) {
        data.map(result =>{
            return(
            <div>
            <p>{result.firstname}</p>
            <p>{result.lname}</p>
            </div>
            )
        })
    };
 
    // const display = login.props
    // console.log("props", display)

    return (
        <div>
            <NavBarAuth onClick ={logOut}/>
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
                            <p className="title" id="username"> {currentUserObj.currentUser.firstName}
                            
                            </p>
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
        </div>



    )
}


export default Landing;