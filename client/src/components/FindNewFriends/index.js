import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';
import $ from 'jquery';

function FindNewFriends(currentUser) {
   
    const [isLoading, setIsLoading] = useState(false);

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })

    //Set-up the original state when the page loads
//   state = {
//     search: "",
//     results: [],
//     currentSort: "default"
//   };
//   // When this component mounts, search for randome Employees API and populated their info
//   componentDidMount() {
//     this.setState({ results: Data })
     
//   }

const [newFriendSearch, setSearch] = useState('');
const [friendResult, setFriendResult] = useState([{
     //search: "",
    //results: [],

}])
    //search: "",
    //results: [],
//});
 
// Load the available token on pageload from local storage
   useEffect(() => {
       //onLoginSuccess();
       handleSearchSubmit();
       //searchfriend();
     // handleInputChange() 
      setFriendResult({friendResult:friendResult})    

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
        // const onLoginSuccess= (currentUser) =>{
        //     setCurrentUserObj({ currentUser: httpClient.getCurrentUser(currentUser)})
        //      console.log("currentUserObj " , currentUserObj )     
        // }

 //function to Handle the  input field
    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFriendResult({ ...friendResult, [name]: value })
    //     console.log("input ", { name, value })
         
    // };
    console.log("all friends", friendResult)
     const handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        console.log("value", value)
        //if (value !=='') {
          let results= [];
          $.ajax({
            url: '/api/users/',
            method: 'get',
            data: value,
            success: (response => {
                console.log('myresponse:', response);
                //setFriendResult({friendResult:response})
            console.log('results', response) 
        if (value !=='')  {
            //const value = event.target.value.toLowerCase();
          const filteredArr = response.filter(result => {
           return result.name.includes(value) || result.date.includes(value)
           || result.email.includes(value) || result.phone.includes(value)
          })
           setFriendResult({friendResult:filteredArr})
           console.log("one friend", filteredArr)
           //this.setState({ results: filteredArr })
        }
        }),
       //}  
        //.catch(err =>{console.log(err)})
        error: (err) => {
            console.log(err);
          } 
      
          })
}




 function handleSearchSubmit(evt, props) {
        //evt.preventDefault()
             $.ajax({
                url: '/api/users/',
                method: 'get',
                 
                success: (response) => {
                    console.log('myresponse:', response);
                    setIsLoading(false)
                    setFriendResult(response) 
                    //handleInputChange();
                    //console.log("friends", friendResult)
                    response.filter(item =>{
                         if(item.name === friendResult.search){
                             
                            console.log("friends", item)
                            //friendResult = item;
                            setIsLoading(item) 
                            //console.log("friends", item)
                       }
                       //setIsLoading(true)
                       setFriendResult(response) 
                        
               })
              },
             error: (err) => {
                  console.log(err);
                } 
      })
   }
//update the database
const addfriend = () =>{
friendResult.map(item =>{
    let container= []
    httpClient.InsertUpdate({
        _id: currentUserObj.currentUser._id,
        friends:[{...currentUserObj.currentUser.friends, friends: item.friends,}]
    }) 
 })
}
//console.log("friends", setFriendResult(friendResult.response))
//display only searched user from the database
// const searchfriend = () =>{
//     friendResult.map(item =>{
//         if(item.name === friendResult.search){
//             console.log("yay", item)
//            return item
//       }
//     })
       
// }
//console.log("yay", searchfriend)
    
        // httpClient.InsertUpdate({
        //     _id: currentUserObj.currentUser._id,
        //     friends:[{...currentUserObj.currentUser.friends, name:item.name, city: item.city, state: item.state, image:item.image,}]
        
    
    //}) 
     //})
    //}


////
    const handleSear = (event) => {
        setIsLoading(true)
        event.preventDefault();
        httpClient.FindUser({name: friendResult.search})
                
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