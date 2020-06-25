import React from 'react';
import './design/Home.css';
import Gif from './../gifs/index.gif'
import Playstore from './../components/Playstore';
import Navbar from '../components/navbar';
import SignUpBtnLarge from './../components/SignUpBtnLarge';

function Home () {
    return(
    <>
      <Navbar/>
      <br />
      <br />
      <div className="tile is-ancestor">
        <div className="tile is vertical is-10 is-clearfix columns" id="tile">
          <div className="column is-three-fifths">
            <p className="title">Welcome to shoestring!</p>
            <br/>
            <p>Shoestring although still in development, is a peer to peer payment application that intergrates international payments no matter where you are in the world. We realized there is a gap in the market for a peer to peer payment system that can integrates currency conversion to send payments instantly both locally and internationally to anyone, anywhere. Sign up to become a founding member or the Shoestring community.</p>
            <br/>
            <p className="subtitle"><strong>Download our app</strong></p>
            <div className="columns">
             <Playstore/>
            </div>
            <div className="columns">
              <div className="column is-full">
                <SignUpBtnLarge/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="column is-pulled-right">
              <img id="apple_gif" src={Gif} alt="apple_gif"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
