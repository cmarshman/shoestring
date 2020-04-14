import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';
 
//Main function to handle friends page
function FindNewFriends(currentUser) {
   
    //Setup loading image state
    const [isLoading, setIsLoading] = useState(false);

    //Setup currently logged in user
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
 
//setup friends states
const [newFriendSearch, setSearch] = useState('');
const [friendResult, setFriendResult] = useState([{}]);
//JT's code
const [addNewFriend, newFriendAdded] = useState(false);
   
 
// Load the all users from the database on page load
   useEffect(() => {
      // handleSearchSubmit();
       handleSearch();
       setFriendResult(friendResult) ;   

    }, [])

     //Restructuring the data received from history 
     currentUser = [
        {
            _id: currentUserObj.currentUser._id,
            friends: currentUserObj.currentUser.friends,
            name: currentUserObj.currentUser.name,
            phone: currentUserObj.currentUser.phone,
            city:  currentUserObj.currentUser.city,
            state: currentUserObj.currentUser.state,
            email: currentUserObj.currentUser.email,
            password: currentUserObj.currentUser.password,
            image:  currentUserObj.currentUser.image,
            
        }]
      
     //Function to handle  search for user on load     
     const handleInputChange = event => {
        const value = event.target.value.toLowerCase();
         httpClient.FindAllUser()   
         .then(response=> {
            const data = response.data
            setFriendResult(data);        
          if (value !=="")  {
           const filteredArr = data.filter(result => {
           return result.name.includes(value) || result.date.includes(value)
           || result.email.includes(value) || result.phone.includes(value)
          })
           setFriendResult(filteredArr); 
        }
        }) 
        .catch(err =>{console.log(err)})
}

//update the database with a new friend added
const addfriend = (evt) =>{
   const friendId = evt.target.dataset.newfriend  
    let friendToAdd=friendResult.find(item =>item._id===friendId)
    httpClient.InsertUpdate({
        _id: currentUserObj.currentUser._id,
        friends:[...currentUserObj.currentUser.friends, {_id:friendToAdd._id, image: friendToAdd.image,name: friendToAdd.name, city: friendToAdd.city, state: friendToAdd.state}]
    }) 
}

//Function to load all user on page load
    const handleSearch = () => {
        httpClient.FindAllUser()   
            .then(serverResponse=> {
             setFriendResult(serverResponse.data);
            })
            .catch(err => setIsLoading(true))
    }
    
    //Maping data to the friends page
    const searchResult = () => {
        return(
            <>
            {friendResult.length > 0 ?
              friendResult.map(item =>{
                   return(
                      
                    <div key={item._id} className="column is-one-third" id="blue"> 
                        <article className="tile is-child notification has-text-centered" id="block">
                            <figure className="image is-square">
                                <Link to={`/user-profile/${item.name}`}>
                                    <img className="is-rounded is-256x256" src={item.image} alt={item.name} />
                                </Link>
                            </figure>
                            <p className="subtitle" >{item.name}</p>
                            <p className="" >{item.city}, {item.state}</p>
                            <hr />
                            <a className="button is-fullwidth is-dark is-medium" 
                            id="friend" data-newfriend={item._id}
                            onClick={addfriend}>Add Friend</a>
                        </article>
                    </div>
                     //}
                    )
                  }
               // }
              

                )
                
            :
            <p>No Results</p>}
            </>
        );
    }
    
    return (
        <>
        <div className="field">
            <div className="control" >
                <label htmlFor="findFriends"></label>
                <input className="input" type="text" 
                name="search"
                onChange={handleInputChange} 
                placeholder="Find new friends . . . " 
                value={friendResult.search}/>
                {/* <button className="button is-light" 
                type="submit" id="submit" onClick={handleSearch}>Submit</button> */}
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="tile is-child columns is-multiline box has-text-centered">
        {
            isLoading ? <Spinner/> : searchResult()
        }
        </div>
        </>
    );
}


export default FindNewFriends;