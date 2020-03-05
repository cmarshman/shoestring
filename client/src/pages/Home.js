import React from 'react';
import './design/Home.css';
import Gif from './../gifs/index.gif'
import Playstore from './../components/Playstore';
import Navbar from './../components/navbar';
import Footer from './../components/footer';
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
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique tempus volutpat. Vivamus nibh mi, vestibulum sed eleifend sed, finibus non lectus. Mauris lobortis, dui et cursus scelerisque, tellus lectus efficitur augue, in pellentesque ipsum nunc eget odio. Nullam vel lacus ut est malesuada tincidunt. Quisque sapien arcu, dictum non tincidunt vitae, fringilla non lectus. Vivamus nibh felis, consectetur molestie elit et, hendrerit tincidunt dolor.
            </p>
            <br />
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
              <img id="apple_gif" src={Gif} alt="apple_gif" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
