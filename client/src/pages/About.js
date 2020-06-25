import React from 'react';
import Navbar from '../components/navbar';
import AppScreens from './../images/AppScreens/user-wallet.png';
import TheTeam from './../components/TheTeam';
import Playstore from './../components/Playstore';

function About() {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <div className="tile is-ancestor">
                <div className="tile is vertical is-10 is-clearfix columns" id="tile">
                    <div className="column">
                        <div className="column is-pulled-right">
                            <img id="appscreens" src={AppScreens} alt="appscreens" />
                        </div>
                    </div>
                    <div className="column is-three-fifths">
                        <p className="title">Meet the Team</p>
                        <br />
                        <TheTeam />
                        <br />
                        <p className="subtitle"><strong>Download our app</strong></p>
                        <div className="columns">
                            <Playstore />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>

    );
}

export default About;