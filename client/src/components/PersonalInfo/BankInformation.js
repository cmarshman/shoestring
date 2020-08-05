import React, { useState, useEffect } from "react";
import httpClient from "../../httpClient";

function BankInformation(currentUser) {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  currentUser = [
    {
      city: currentUserObj.currentUser.city,
      state: currentUserObj.currentUser.state,
    },
  ];

  return (
    <div className="box">
      <h2 className="title is-3">Edit your bank information</h2>
      <p>
        Sed ac pulvinar ex. Nullam eget justo ac tellus eleifend interdum. Ut
        gravida lorem semper leo hendrerit, vitae volutpat sapien maximus. Nam
        urna enim, pretium quis tincidunt at, ornare sit amet ligula. Nulla
        sodales, justo et ultrices porta, nisl magna congue sapien, sit amet
        commodo libero turpis sit amet ex. Donec molestie tristique lorem non
        scelerisque. Donec rutrum ex ac mauris dignissim, non posuere nisl
        bibendum. Praesent ornare justo id lectus vulputate fermentum. Praesent
        efficitur nec velit sed viverra. Pellentesque et magna urna. Praesent at
        diam vestibulum, semper tortor ac, ultricies nulla. Nulla sollicitudin
        tortor a sem facilisis lobortis. Morbi in eros metus. Donec quis dolor
        nulla.
      </p>
    </div>
  );
}

export default BankInformation;
