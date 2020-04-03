import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import './design/Landing.css'
import FriendCard from './../components/FriendCard';
import Plaid from './../components/plaidLink';
import NavBarAuth from '../components/NavBarAuth';
import AddImage from './../components/AddImage';
import { Redirect } from "react-router-dom";

function Landing(props, currentUser) {
 
    const [currentUserObj, setCurrentUserObj] = useState({
         currentUser: httpClient.getCurrentUser()
    })
 

  
//}
    // Load the available token on pageload from local storage
     useEffect(() => {
        onLoginSuccess()
        //settingUpCurrentUser ()
        work()
    }, [])

    //Restructuring the data received from history 
// const settingUpCurrentUser = ()=>{
//     if(currentUser===null){ 
//      window.location.replace('/login')
//        alert('hey')
//       }  
const work = () =>{
    if(currentUser===null){
    //<Redirect from='home' to='/'/>
    window.location.replace('/')
    }
     
  }
    
    currentUser =[
        {
        firstName:currentUserObj.currentUser.firstName,
        lastName: currentUserObj.currentUser.lastName,
        phone: currentUserObj.currentUser.phone,
        email: currentUserObj.currentUser.email,
        password: currentUserObj.currentUser.password,
    }]
//}
 	const onLoginSuccess= (currentUser) =>{
        setCurrentUserObj({ currentUser: httpClient.getCurrentUser(currentUser) })
         console.log("currentUserObj " , currentUserObj )
        //console.log("user " , currentUserObj.currentUser.firstName)
     }

	//}
	 
	

    return (
        
        <div>

            <NavBarAuth/>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                <div className="tile is-10 container column is-fluid">
                    <div className="tile is-7 is-vertical is-parent">
                        <div className="tile is-child box">
                            
                                <Plaid />
                             <AddImage />

                            <br />
                            <p>
                            {currentUser[0].firstName} {currentUser[0].lastName}
                            {/* <Redirect to="/home"/> */}
                            {/* :<Redirect from="/home" to='/'/> */}
                              
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
                </div>
                </div>
            </div>
        </div>


    )
}


export default Landing;
 