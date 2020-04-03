import React, { useState } from 'react';
import API from '../../utils/api';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import './style.css';


function SearchMyFriends() {
    const [friendSearch, setSearch] = useState('');
    const [friendResult, setFriendResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSearchSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        API.searchForUsers(friendSearch)
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
                                <Link to={`/user-profile/${item.firstName}`}>
                                    <img className="is-rounded is-256x256" src={item.image} alt={item.name} />
                                </Link>
                            </figure>
                            <p className="subtitle" >{item.name}</p>
                            <p className="" >{item.location}</p>
                            <hr />
                            <a className="button is-dark is-medium" id="friend">Friend</a>
                            <a className="button is-dark is-medium" id="sendMoney">Send Money</a>
                        </article>
                    </div>
                )
            :
            <p>No Results</p>}
            </>
        );
    }
    
    return(
        <>
        <div className="field">
            <div className="control" onSubmit={handleSearchSubmit}>
                <label htmlFor="findFriends"></label>
                <input className="input" type="text" onChange={onChangeHandler} placeholder="Search my friends . . . " value={friendSearch}/>
                <button class="button is-light" type="submit" id="submit">Submit</button>
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
    )
}

export default SearchMyFriends;