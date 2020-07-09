import React, { useState } from 'react';
import './style.css';
import FindNewFriends from '../FindNewFriends';
import SearchMyFriends from '../SearchMyFriends';

function FindFriends () {

    return(
        <>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-12 is-vertical is-parent" id="wallet">
                            <div className="tile is-child box has-text-centered">
                            <p className="title">Search for new friends</p>
                                <FindNewFriends/> 

                            </div>
                            </div>
                        </div>
                    </div>
                </div>              
        </>
    );
}

export default FindFriends; 