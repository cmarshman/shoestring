import React, { useState } from 'react';
import API from '../../utils/api';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';

function FindNewFriends() {
    const [newFriendSearch, setSearch] = useState('');
    const [friendResult, setFriendResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


//     function handleSearchSubmit(evt) {
//         evt.preventDefault()
//              $.ajax({
//                 url: 'http://localhost:3000/api/users/' ,
//                 method: 'get',
//                 success: (response) => {
//                     console.log('response:', response);
//                     for(var i =0; i<response.length; i++ ){
//                        if(response[i].email === loginObject.email){ 
//                            window.location.replace('/login')
//                       }  
//                 }     return
//                },
//                 error: (err) => {
//                   console.log(err);
//                 } 
//             })
//    }
    
    const handleSearchSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        API.searchForUsers(newFriendSearch)
            .then(response => {
                setIsLoading(false)
                setFriendResult(response.data)
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
                friendResult.map((item) =>
                    <div key={item.id} className="column is-one-third" id="blue">
                        <article className="tile is-child notification has-text-centered" id="block">
                            <figure className="image is-square">
                                {/* <Link to={`/user-profile/${item.firstName}`}>
                                    <img className="is-rounded is-256x256" src={item.image} alt={item.name} />
                                </Link> */}
                            </figure>
                            <p className="subtitle" >{item.firstname}</p>
                            <p className="" >{item.location}</p>
                            <hr />
                            <a className="button is-dark is-medium" id="friend">Friend</a>
                        </article>
                    </div>
                )
            :
            <p>No Results</p>}
            </>
        );
    }
    
    
    
    return (
        <>
        <div className="field">
            <div className="control" onSubmit={handleSearchSubmit}>
                <label htmlFor="findFriends"></label>
                <input className="input" type="text" onChange={onChangeHandler} placeholder="Find new friends . . . " value={newFriendSearch}/>
                <button className="button is-primary" type="submit" id="submit">Submit</button>
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