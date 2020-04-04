import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';
import $ from 'jquery';

function FindNewFriends(currentUser) {
    const [newFriendSearch, setSearch] = useState('');
    const [friendResult, setFriendResult] = useState([{search: ''}]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
// Load the available token on pageload from local storage
   useEffect(() => {
       onLoginSuccess();
       handleSearchSubmit();
    //settingUpCurrentUser ()
       //work()
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
        const onLoginSuccess= (currentUser) =>{
            setCurrentUserObj({ currentUser: httpClient.getCurrentUser(currentUser)})
             console.log("currentUserObj " , currentUserObj )
            //console.log("user " , currentUserObj.currentUser.firstName)
        }

 //function to Handle the  input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFriendResult({ ...friendResult, [name]: value })
        console.log("input ", { name, value })
         
    };

 function handleSearchSubmit(evt) {
        //evt.preventDefault()
             $.ajax({
                url: 'http://localhost:3000/api/users/',
                method: 'get',
                 
                success: (response) => {
                    console.log('myresponse:', response);
                    setIsLoading(false)
                    setFriendResult(response) 
                    // response.map(item =>{
                    //     httpClient.InsertUpdate({
                    //         _id: currentUserObj.currentUser._id,
                    //         friends:  item.image
                    //     }) 
                    // })
                    //this.props.setFriendResult(response) 
				    //this.props.history.push('search')   
                    console.log('image:',  response.image);
                    // for(var i =0; i<response.length; i++ ){
                    //    if(response[i] === friendResult[i]){ 
                    //     console.log('good:', friendResult)
                            //setIsLoading(false)
                            //(response.data)
                           //console.log("name" ,response[i] )
                           //window.location.replace('/login')
                //       }  
                // }     return
               },
                error: (err) => {
                  console.log(err);
                } 
            })
   }
   //update the database
//    httpClient.InsertUpdate({
    //_id: currentUserObj.currentUser._id,
    //friends:  //currentUserObj.currentUser
//}) 
const addfriend = () =>{
friendResult.map(item =>{
    httpClient.InsertUpdate({
        _id: currentUserObj.currentUser._id,
        friends:[{ name:item.name, city: item.city, state: item.state, image:item.image}]
    }) 
 })
}

////
    const handleSear = (event) => {
        setIsLoading(true)
        event.preventDefault();
        httpClient.FindUser({name: friendResult.search})
               //console.log("friendResult", friendResult.search)
            .then(response => {
                console.log("friendResult", response.data)
                setIsLoading(false);
                setFriendResult(response);
            })
            .catch(err => setIsLoading(false))
    }
    
    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    }
    
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
                            <a className="button is-dark is-medium" 
                            id="friend"
                            onClick={addfriend}>Add Friend</a>
                        </article>
                    </div>
                    )
                }


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
                <button className="button is-light" 
                type="submit" id="submit" onClick={handleSearchSubmit}>Submit</button>
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