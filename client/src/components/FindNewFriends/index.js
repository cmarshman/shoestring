import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import Spinner from '../Spinner';
import './style.css';
import $ from 'jquery';

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

    //Toggle Add Friends Button
    const [addNewFriend, newFriendAdded] = useState(false);
    
    // Load the all users from the database on page load
    useEffect(() => {
        handleSearch();
        
    }, [])
 
    //Function to search for friend in 
    const handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        httpClient.FindAllUser()
            .then(response => {
                const data = response.data
                setFriendResult(data);
                if (value !== "") {
                    const filteredArr = data.filter(result => {
                        return result.name.includes(value) || result.email.includes(value) || result.phone.includes(value)
                    })
                    setFriendResult(filteredArr);
                }
            })
            .catch(err => { console.log(err) })
    }

    //Friend added message
    function onSuccess() {
        $("#successMsg").text("Your new friend has been added!")
    }
   
    //update the database with a new friend added 
    const addfriend = (evt) => {
        const friendId = evt.target.dataset.newfriend
        let friendToAdd = friendResult.find(item => item._id === friendId)
         if(friendToAdd !=null){
          httpClient.InsertUpdate({
            _id: currentUserObj.currentUser._id,
           friends: [...currentUserObj.currentUser.friends, {...friendToAdd}]
             
        })
   }    
        onSuccess();
    }

    //Function to load all user on page load
    const handleSearch = () => {
        httpClient.FindAllUser()
            .then(serverResponse => {
                setFriendResult(serverResponse.data);
            })
            .catch(err => setIsLoading(true))
    }


//Maping data to the friends page
    const searchResult = () => {
        return (
            <>
                  {friendResult.map(item => {
                        return (
                            <div key={item._id} className="column is-one-third" id="blue">
                                <article className="tile is-child notification has-text-centered" id="block">
                                    <figure className="image is-square">

                                            <img className="is-rounded is-256x256" src={item.image} alt={item.name} />

                                    </figure>
                                    <p className="subtitle" >{item.name}</p>
                                    <p className="" >{item.city}, {item.state}</p>
                                    <hr />
                                    <button className="button is-fullwidth is-dark is-medium saveBtn" id="friend" data-newfriend={item._id} onClick ={addfriend}>
                                        Add Friend
                                    </button>
                                </article>
                            </div>
                        )
                    }
                    )}
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
                        value={friendResult.search} />
                </div>
            </div>
            <div id="successMsg"></div>
            <br />
            <div className="tile is-child columns is-multiline box has-text-centered">
                {
                    isLoading ? <Spinner /> : searchResult()
                }
            </div>
        </>
    );
}

export default FindNewFriends; 
