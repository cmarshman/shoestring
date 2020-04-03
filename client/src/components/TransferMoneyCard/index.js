import React from 'react';
import JT from '../../images/Team/JT.png';
import './style.css';
import FriendCard from '../FriendCard';

function TransferMoneyCard () {
    return(
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid" id="wheres_waldo">
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
                        <div className="tile is-3 is-vertical is-parent">
                            <FriendCard/>
                        </div>  
                    </div>
                </div>
                <br/>
                <div className="tile is-ancestor columns is-centered" id="waldos_nothere">
                <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                    <p className="subtitle has-text-centered">
                        Transfer Money to your friend
                    </p>
                    <p>Select from your friends to send money</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="Search by friends name . . . " />
                        <span className="icon is-small is-left">
                        <i class="fas fa-user-circle"></i>
                        </span>
                    </p>
                    <p>Enter the ammount you would like to transfer</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i class="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <a className="button is-dark" id="deposit">Transfer Money</a>

                </div>
                </div>
        </div>
    )
}

export default TransferMoneyCard;