import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/Landing.css';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
// import FriendCard from './../components/FriendCard';
import Plaid from './../components/plaidLink';
import NavBarAuth from '../components/NavBarAuth';
import UserNameCard from '../components/UserNameCard';
import AddImage from './../components/AddImage';
import Payments from './../components/Payments';
import moment from 'moment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
    }
};

Modal.setAppElement('#root')

function Landing() {

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })

    var createdDate = currentUserObj.currentUser.date
    console.log(createdDate)
    createdDate = moment().format('LL');

    const [friendResult, setFriendResult] = useState([{}]);

    //Load funtion on page load
    useEffect(() => {
        handleFriends()
    }, [])


    //Function to load all user on page load
    const handleFriends = () => {
        httpClient.FindAllUser()
            .then(serverResponse => {
                setFriendResult(serverResponse.data);
                let currentUserId = currentUserObj.currentUser._id
                let findFriend = serverResponse.data.find(item => item._id === currentUserId)
                let friendsArray = findFriend.friends
                setFriendResult(friendsArray)
            })
            .catch(err => { console.log(err) })
    }

    // var subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal () {
    //     subtitle.style.color = '#3bd389';
    // }

    function closeModal() {
        setIsOpen(false);
    }


    // Render the  all  the  pages on the landing pages
    return (
        <>
            {(currentUserObj.currentUser !== null) ? (
                <div>
                    <NavBarAuth />
                    <div className="outerTile">
                        <div className="is-clearfix columns is-centered">
                            <div className="tile is-9 container column is-fluid" id="purpleDuck">
                                <div className="tile is-vertical is-parent" >
                                    <div className="tile is-child box has-text-centered" >
                                        <div className="is-centered" >
                                            <UserNameCard />
                                            <AddImage />
                                            <br />
                                            <Plaid />
                                            <p id="funds">Funds Available: {currentUserObj.currentUser.amount}</p>
                                            <p id="member">Member Since: {createdDate}</p>
                                        </div>
                                    </div>
                                    <div className="tile is-child box is-fullwidth">
                                        <Payments />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="tile is-3 container column is-fluid" id="craftBrew">
                                <div className="tile is-child box has-text-centered" id="pinkDuck">
                                    {friendResult.map(item => {
                                        return (
                                            <div>
                                                <article key={item._id} className="is-scrollable friend" id="friendSelector" >
                                                    <figure id="block">
                                                        <p className="image has-text-centered" id="friendPic">
                                                            <div className="is-centered">
                                                                <img className="is-rounded is-48x48" id="userPhoto" src={item.image} alt={item.name} />
                                                            </div>
                                                            {item.name}
                                                        </p>
                                                    </figure>
                                                    <div>
                                                        <h3 className="has-text-centered" id="location">{item.city}</h3>
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <a className="button is-light" id="seltzer" onClick={openModal}>Send Money</a>
                                                        <a className="button is-light" id="seltzer" >Remove Friend</a>
                                                    </div>
                                                    <hr />


                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal-card">
                                                            <header className="modal-card-head">
                                                                <p className="modal-card-title">Send Money</p>
                                                                <button className="delete" aria-label="close" onClick={closeModal}></button>
                                                            </header>
                                                            <section className="modal-card-body">
                                                                
                                                            </section>
                                                            <footer className="modal-card-foot">
                                                                <button className="button is-success">Save changes</button>
                                                                <button className="button" onClick={closeModal}>Cancel</button>
                                                            </footer>
                                                        </div>
                                                        
                                                    </Modal>
                                                </article>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : window.location.replace("/")}

        </>
    )
}

export default Landing;


