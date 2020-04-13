import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/Landing.css';
import FriendCard from './../components/FriendCard';
import Plaid from './../components/plaidLink';
import NavBarAuth from '../components/NavBarAuth';
import UserNameCard from '../components/UserNameCard';
import AddImage from './../components/AddImage';
import { Redirect } from "react-router-dom";
import NavBar from '../components/navbar'

function Landing() {
 
    const [currentUserObj, setCurrentUserObj] = useState({
         currentUser: httpClient.getCurrentUser()
    })
//}
    // Load the available token on pageload from local storage
     useEffect(() => {
        //currentuserCheck();
    }, [])
     
    const currentuserCheck = () => {
        if (currentUserObj.curenntUser=== null){
            window.location.replace('/')
        }
        setCurrentUserObj(httpClient.getCurrentUser())

    }

   // console.log('current', currentUserObj.currentUser)
   
    return (
      
        <>
        {(!currentUserObj.currentUser ===null) ?(
            <div>
              <NavBarAuth/> 
                  <div className="outerTile">
                      <div className="is-clearfix columns is-centered">
                      <div className="tile is-10 container column is-fluid">
                          <div className="tile is-7 is-vertical is-parent" >
                              <div className="tile is-child box has-text-centered" >
                                  <div className="is-centered" >
                                      <Plaid />
                                   <AddImage />
                                  <br />
                                  <UserNameCard/>
                                  <p id="funds">Funds Available: $100</p>
                                  <p id="member">Member Since: April 2019</p>
                                  </div>
                              </div>
                              <div className="tile is-child box">
                                  <p className="title" id="paymentList">Payments</p>
                                  <p>Lisa paid Arnold for Pizza</p>
                                  <p>Jeff paid Jesus for rent</p>
                              </div>
                              </div>
                          <FriendCard />
                      </div>
                  </div>
              </div>
         </div>
             
        ): window.location.replace("/")}
        
        </>

      

)

}
export default Landing;
 

