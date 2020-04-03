import React, { useState } from 'react';
import API from '../../utils/api';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';
import $ from 'jquery';

function FindNewFriends(props) {
    const [newFriendSearch, setSearch] = useState('');
    const [friendResult, setFriendResult] = useState([{search: ''}]);
    const [isLoading, setIsLoading] = useState(false);

    // const [loginObject, setLoginObject] = useState({
    //     email: "",
    //     password: "",
       
    // })

 //function to Handle the  input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFriendResult({ ...friendResult, [name]: value })
        console.log("input ", { name, value })
         
    };

 function handleSearchSubmit(evt, _id) {
        evt.preventDefault()
             $.ajax({
                url: 'http://localhost:3000/api/users/',
                method: 'get',
                 
                success: (response) => {
                    console.log('response:', response);
                    setIsLoading(false)
                    setFriendResult(response) 
                    //this.props.setFriendResult(response) 
				    //this.props.history.push('search')   
                    console.log('data:',  friendResult);
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
    
    // const handleSearchSubmit = (event) => {
    //     setIsLoading(true)
    //     event.preventDefault();
    //     API.searchForUsers(newFriendSearch)
    //         .then(response => {
    //             setIsLoading(false)
    //             setFriendResult(response.data)
    //         })
    //         .catch(err => setIsLoading(false))
    // }
    
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
                                <Link to={`/user-profile/${item.firstName}`}>
                                    <img className="is-rounded is-256x256" src={item.image} alt={item.name} />
                                </Link>
                            </figure>
                            <p className="subtitle" >{item.firstName}</p>
                            {/* <p className="" >{item.location}</p> */}
                            <hr />
                            <a className="button is-dark is-medium" id="friend">Friend</a>
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
                //onChange={handleInputChange} 
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