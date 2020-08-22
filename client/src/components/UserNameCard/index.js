import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';

function UserNameCard() {

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
   })
   
   //setup results state
    const [friendResult, setFriendResult] = useState([{}]);

   useEffect(() => {
    changeCurrentState()
    }, [])

//Function to handle the updated user information
     const changeCurrentState = () =>{
       let currentUser = currentUserObj.currentUser

        httpClient.FindAllUser()
          .then(serverResponse => {
              const data = serverResponse.data
              let findCurrentUser = data.find(item => item._id === currentUser._id)
              
              if(findCurrentUser !=null){
                setFriendResult(findCurrentUser)
                console.log("findCurrentUser", findCurrentUser)
              }
          })
      }

    return (
        <>
        {currentUserObj.currentUser !==null ?(
               <p className="title">
               {friendResult.name}
              </p>
             
            ): window.location.replace("/")}
        
        </>
    );
}

export default UserNameCard;
