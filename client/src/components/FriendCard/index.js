import React, { useState, useEffect } from "react";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
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

function Card() {
    //setup currently logged in user
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });
    //setup results state
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
                let friendsArray = findFriend.friends.slice(1)
                setFriendResult(friendsArray)
            })
            .catch(err => { console.log(err) })
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modal2IsOpen, set2IsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function openModal2() {
        set2IsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModal2() {
        set2IsOpen(false);
    }

    //Render all the logged in user Friends
    return (
        <>
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
                                        <a className="button is-light" id="seltzer" onClick={openModal2}>Remove Friend</a>
                                    </div>
                                    <hr />


                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Send Money Modal"
                                    >
                                        <div className="modal-card">
                                            <header className="modal-card-head">
                                                <p className="modal-card-title">Send Money</p>
                                                <button className="delete" aria-label="close" onClick={closeModal}></button>
                                            </header>
                                            <section className="modal-card-body">
                                            <p className='subtitle'>How much would you like to transfer</p>
                                                <div class="field has-addons">
                                                    <p class="control">
                                                        <span class="select">
                                                            <select>
                                                                <option>$</option>
                                                                <option>£</option>
                                                                <option>€</option>
                                                            </select>
                                                        </span>
                                                    </p>
                                                    <p class="control is-expanded">
                                                        <input class="input" type="text" placeholder="Amount of money"/>
                                                    </p>
                                                </div>
                                                <p className='subtitle'>Leave a messeage for your friend</p>
                                                <div class="field">
                                                    <div class="control">
                                                        <textarea class="textarea" placeholder="For the fluffy rainbow unicorn"></textarea>
                                                    </div>
                                                </div>
                                            </section>
                                                <footer className="modal-card-foot">
                                                    <button className="button is-success">Submit Payment</button>
                                                </footer>
                                        </div>
                                    </Modal>
                                        <Modal
                                            isOpen={modal2IsOpen}
                                            onRequestClose={closeModal2}
                                            style={customStyles}
                                            contentLabel="Remove Friend Modal"
                                        >
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title">Remove Friend</p>
                                                    <button className="delete" aria-label="close" onClick={closeModal2}></button>
                                                </header>
                                                <section className="modal-card-body">

                                                </section>
                                                <footer className="modal-card-foot">
                                                    <button className="button is-success">I'm sure</button>
                                                    <button className="button" onClick={closeModal2}>Never Mind</button>
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
        </>
    );
}

export default withRouter(Card);