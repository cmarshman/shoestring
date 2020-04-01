import React, { useState } from 'react';
import './style.css';
import friends from '../../utils/friendList.json';
import FindNewFriends from '../FindNewFriends';
import SearchMyFriends from '../SearchMyFriends';

function FindFriends () {
    
    const [pickSearch, setPickSearch] = useState(false)
    
    const handleToggle = () => {
        setPickSearch(pickSearch => !pickSearch)
    }

    return(
        <>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-12 is-vertical is-parent" id="wallet">
                            <div className="tile is-child box has-text-centered">
                            <p className="subtitle">Toggle below to search for new friends or filter through your current friends</p>
                            <button className="button is-dark is-medium deposit" id="newFreind" onClick={handleToggle}><strong>{pickSearch ? "Find new friends" : "Search my friends"}</strong></button>
                            {!pickSearch ? 
                                <SearchMyFriends/>
                                :
                                <FindNewFriends/>  
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-12 is-vertical is-parent" id="wallet">
                            <div className="tile is-child columns is-multiline box has-text-centered">
                                {friends.map(item => (
                                    <div key={item.id} className="column is-one-third" id="blue">
                                        <article className="tile is-child notification has-text-centered" id="block">
                                            <figure className="image is-square">
                                                <img className="is-rounded is-256x256" src={item.image} alt={item.name} />
                                            </figure>
                                            <p className="subtitle" >{item.name}</p>
                                            <p className="" >{item.location}</p>
                                            <hr />
                                            <a className="button is-dark is-medium" id="friend">Friend</a>
                                            <a className="button is-dark is-medium" id="sendMoney">Send Money</a>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </>
    );
}

export default FindFriends; 