import React from 'react';
import './style.css';
import James from '../../images/friendPhotos/james_horton.jpg';
import UserProfileBtn from '../UserProfileBtn';

function UserProfileCard() {
    return(
        <>
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-7 is-vertical is-parent"  id="wallet">
                            <div className="tile is-child box has-text-centered">
                                <a className="" href=''>
                                    <img className="is-rounded is-256x256" src={James} alt="James Horton"/>
                                </a>
                                <h1 className="title">
                                    James Horton
                                </h1>
                                <h2 className="subtitle">
                                    Member Since: April 2020
                                </h2>
                                <UserProfileBtn/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
        </>
    );
}

export default UserProfileCard;