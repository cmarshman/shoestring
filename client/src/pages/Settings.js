import React, { useState, useEffect } from 'react';
import NavBarSettings from '../components/NavBarSettings';
import '../pages/design/signup.css';
import EditSettings from '../components/EditSettings';
import $ from 'jquery'
import httpClient from '../httpClient';

function Settings() {

    useEffect(() => {
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        })
    })

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })

    return (
        <>
        {(currentUserObj !== null) ? (
            <div>
            <NavBarSettings />
            <div className="tile is-ancestor" >
                <div className="tile is-vertical is-11" id="tile">
                    <article className="tile is-child notification">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="menu sticky">
                                    <br/>
                                    <br/>
                                    <p className="menu-label"><b>Quick Links</b></p>
                                    <ul className="menu-list">
                                        <li>
                                        <div className="navbar-item has-dropdown is-hoverable">
                                            <a className="navbar-link is-arrowless" href="#personal-information">Personal Information</a>
                                            <div className="navbar-dropdown">
                                                <a className="navbar-item" href="#name">
                                                Name
                                                </a>
                                                <a className="navbar-item" href="#phone-number">
                                                Phone Number
                                                </a>
                                                <a className="navbar-item" href="#location">
                                                Location
                                                </a>
                                                <a className="navbar-item" href="#email">
                                                Email
                                                </a>
                                            </div>
                                        </div>
                                        </li>
                                        <li><a href="#edit-password">Password</a></li>
                                        <li><a href="#edit-photo">Photo</a></li>
                                        <li><a href="#edit-bank-informaion">Bank Information</a></li>
                                    </ul>
                                        </div>
                            </div>
                                    <div id="editSettings">
                                        <EditSettings />
                                    </div>
                                </div>
                    </article>
                        </div>
            </div>
            </div>
        ) : window.location.replace("/")}
    </>
    )
}

export default Settings;