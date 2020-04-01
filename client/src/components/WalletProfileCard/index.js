import React from 'react';
import JT from '../../images/Team/JT.png';
import './style.css';

function WalletProfileCard() {
    return(
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-7 is-vertical is-parent"  id="wallet">
                            <div className="tile is-child box has-text-centered">
                                <a className="title" href=''>
                                    <img src={JT} alt="JT Turner"/>
                                </a>
                                <h1 className="title">
                                    JT Turner
                                </h1>
                                <h2 className="subtitle">
                                    Funds Available: $100 <br/>
                                    Member Since: April 2020
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
    );
}

export default WalletProfileCard;