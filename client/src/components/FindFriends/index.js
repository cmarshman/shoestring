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
                            <button className="button is-dark is-medium deposit" id="newFreind" onClick={handleToggle}><strong>{pickSearch ? "Switch to Find new friends" : "Switch to Search my friends"}</strong></button>
                            {!pickSearch ? 
                                <FindNewFriends/> 
                                :
                                <SearchMyFriends/> 
                            }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>              
        </>
    );
}

export default FindFriends; 