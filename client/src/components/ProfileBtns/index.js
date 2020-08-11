import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from 'react-modal';
import httpClient from "../../httpClient.js";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        border: '#ffffff',
        boxShadow: '6px -4px 70px -9px rgba(0,0,0,0.75)'
    }
};

Modal.setAppElement('#root')

function ProfileBtns() {
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
  
    return (
    <div className="columns is-10">
      <div className="column is-one-quarter">
        <Link
          to="/settings#edit-bank-informaion"
          type="button"
          className="button"
          id="fatcat"
        >
          Connect your bank account
        </Link>
      </div>
      <div className="column is-one-quarter">
        <Link
          to="/settings#edit-photo"
          type="button"
          className="button"
          id="fatcat"
        >
          Add a Photo
        </Link>
      </div>
      <div className="column is-one-quarter">
        <Link to="/findafriend" type="button" className="button" id="fatcat">
          Find a Friend
        </Link>
      </div>
      <div className="column is-one-quarter">
        <a type="button" className="button" id="fatcat" onClick={openModal}>
          My Wallet
        </a>
      </div>
    </div>
  );
}

export default ProfileBtns;
