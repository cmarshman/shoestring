import React from 'react';
import Navbar from './../components/navbar';
import Footer from './../components/footer';
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
                        <p className="title">About shoestring!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique tempus volutpat. Vivamus nibh mi, vestibulum sed eleifend sed, finibus non lectus. Mauris lobortis, dui et cursus scelerisque, tellus lectus efficitur augue, in pellentesque ipsum nunc eget odio. Nullam vel lacus ut est malesuada tincidunt. Quisque sapien arcu, dictum non tincidunt vitae, fringilla non lectus. Vivamus nibh felis, consectetur molestie elit et, hendrerit tincidunt dolor.
                        </p>
                        <br />
                        <p className="subtitle"><strong>Download our app</strong></p>
                        <div className="columns">
                            <Playstore />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="tile is-ancestor">
                <div className="tile is vertical is-10 is-clearfix columns" id="tile">
                    <p className="title">Meet the Team</p>
                </div>
            </div>
            <br />
            <TheTeam />
            <Footer />
        </>
    );
}

export default About;