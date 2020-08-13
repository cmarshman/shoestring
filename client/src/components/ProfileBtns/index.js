import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";
import ImportMoney from '../Wallet/ImportMoney';
import ExportMoney from '../Wallet/ExportMoney';
import './style.css';
// import httpClient from "../../httpClient.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "#ffffff",
    boxShadow: "6px -4px 70px -9px rgba(0,0,0,0.75)",
  },
};

Modal.setAppElement("#root");

function ProfileBtns() {
  const [walletmodalIsOpen, setwalletModalIsOpen] = useState(false);
  const [pickWalletUpdate, setPickWalletUpdate] = useState(false);

  const handleWalletToggle = () => {
      setPickWalletUpdate(pickWalletUpdate => !pickWalletUpdate)
  }

  function openWalletModal() {
    setwalletModalIsOpen(true);
  }

  function closeWalletModal() {
    setwalletModalIsOpen(false);
  }

  return (
    <>
      <div className="columns is-10">
        <div className="column is-one-quarter">
          <Link
            to="/settings#edit-bank-informaion"
            type="button"
            className="button"
            id="fatcat"
          >
            My Bank Account
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
          <Link 
            to="/findafriend" 
            type="button" 
            className="button" 
            id="fatcat">
            Find a Friend
          </Link>
        </div>
        <div className="column is-one-quarter">
          <a
            type="button"
            className="button"
            id="fatcat"
            onClick={openWalletModal}
          >
            My Wallet
          </a>
          <form>
            <Modal
              isOpen={walletmodalIsOpen}
              onRequestClose={closeWalletModal}
              style={customStyles}
              contentLabel="Send Money Modal"
            >
              <div className="modal-card">
                <header className="modal-card-head">
                  <button className="button" id="skinyCat" onClick={handleWalletToggle}>{pickWalletUpdate ? "Click to deposit money in your bank account" : "Click to add money to your wallet"}</button>
                  {!pickWalletUpdate ?
                    <ImportMoney />
                    :
                    <ExportMoney />
                  }
                  <button
                    className="delete"
                    aria-label="close"
                    onClick={closeWalletModal}
                  ></button>
                </header>

                <footer className="modal-card-foot">
                  <button
                    className="button is-light"
                    onClick={closeWalletModal}
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </Modal>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileBtns;
