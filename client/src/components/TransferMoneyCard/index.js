import React from 'react';
import './style.css';
import FriendCard from '../FriendCard';
import MyImage from '../MyImage';
import UserNameCard from '../UserNameCard';

function TransferMoneyCard () {
    return(
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid" id="wheres_waldo">
                        <div className="tile is-7 is-vertical is-parent"  id="wallet">
                            <div className="tile is-child box has-text-centered">
                                <a className="title" href=''>
                                    <MyImage/>
                                </a>
                                <UserNameCard/>
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
                        Transfer money to your friend
                    </p>
                    <p>Select from your friends to send money</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="Search by friends name . . . " />
                        <span className="icon is-small is-left">
                        <i className="fas fa-user-circle"></i>
                        </span>
                    </p>
                    <p>Enter the ammount you would like to transfer</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <p>Leave a messeage for your friend</p>
                    <textarea className="textarea" placeholder="For fluffy rainbow unicorn"></textarea>
                    <br/>
                    <a className="button is-light" id="deposit">Transfer Money</a>

                </div>
                </div>
        </div>
    )
}

export default TransferMoneyCard;