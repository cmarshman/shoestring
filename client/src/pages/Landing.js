import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import { Link } from 'react-router-dom';
import "./design/Landing.css";
import Friends from "../components/FriendCard";
import NavBarAuth from "../components/NavBarAuth";
import UserNameCard from "../components/UserNameCard";
import ProfileImage from "../components/ProfileImage";
import Payments from "./../components/Payments";
import moment from "moment";

function Landing() {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  //Load funtion on page load
  useEffect(() => {
    handleFriends();
  }, []);
  //Function to load all currentuser on page load
  const handleFriends = () => {
    httpClient
      .FindAllUser()
      .then((serverResponse) => {
        let currentUserId = currentUserObj.currentUser._id;
        let findFriend = serverResponse.data.find(
          (item) => item._id === currentUserId
        );
        setCurrentUserObj(findFriend);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let createdDate1 = currentUserObj.date;
  console.log(createdDate1);
  let createdDate = moment(createdDate1).format("LL");

  // Render the  all  the  pages on the landing pages
  return (
    <>
      {currentUserObj !== null ? (
        <div>
          <NavBarAuth />
          <div className="outerTile">
            <div className="is-clearfix columns is-centered">
              <div
                className="tile is-9 container column is-fluid"
                id="purpleDuck"
              >
                <div className="tile is-vertical is-parent">
                  <div className="tile is-child box has-text-centered">
                    <div className="is-centered">
                      <UserNameCard />
                      <ProfileImage />
                      <div className="columns is-10">
                        <div className="column is-one-quarter">
                          <Link 
                            to="/settings/#edit-bank-informaion"
                            type="button"
                            className="button"
                            id="fluffyduck"
                          >
                            Connect your bank account
                          </Link>
                        </div>
                        <div className="column is-one-quarter">
                          <Link
                            to="/settings/#edit-photo"
                            type="button"
                            className="button"
                            id="fluffyduck"
                          >
                            Add a Photo
                          </Link>
                        </div>
                        <div className="column is-one-quarter">
                          <Link
                            to="/findafriend"
                            type="button"
                            className="button"
                            id="fluffyduck"
                          >
                            Find a Friend
                          </Link>
                        </div>
                        <div className="column is-one-quarter">
                          <button
                            type="button"
                            className="button"
                            id="fluffyduck"
                          >
                            My Wallet
                          </button>
                        </div>
                      </div>
                      <p id="funds">
                        Funds Available: $ {currentUserObj.balance}
                      </p>
                      <p id="member">Member Since: {createdDate}</p>
                    </div>
                  </div>
                  <div className="tile is-child box is-fullwidth">
                    <Payments />
                  </div>
                </div>
              </div>
              <Friends />
            </div>
          </div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default Landing;
