import React, { useState } from "react";
import httpClient from "../../httpClient";

function ProfileImage(currentUser) {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  currentUser = [
    {
      image: currentUserObj.currentUser.image,
    },
  ];

  const userImage = currentUserObj.currentUser.image;

  return (
    <>
      {currentUserObj.currentUser !== null ? (
        <div>
          <figure className="image">
            <img id="lamp" className="is-rounded" src={userImage} />
          </figure>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default ProfileImage;
