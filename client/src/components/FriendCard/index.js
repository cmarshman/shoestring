import React, { useState, useEffect } from "react";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import httpClient from "../../httpClient.js";

import * as Yup from 'yup';
import { useFormik, yupToFormErrors } from 'formik';
import $, { data } from 'jquery';
import moment from 'moment';


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

//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
    email: Yup.string().required(),
    name: Yup.string().required(),
    amount: Yup.number().required(),
    message: Yup.string(),

});

function Card() {

    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            name: '',
            amount: 0,
            message: '',

        },
        validationSchenma,
        onSubmit(values) {
            console.log('values', values)
            transferMoney(values)
        }
    });

    //setup currently logged in user
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });
    //setup results state
    const [friendResult, setFriendResult] = useState([{}]);

    const [sendMoney, setSendMoney] = useState([{}]);

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
                setCurrentUserObj(findFriend)
            })
            .catch(err => { console.log(err) })
    }


    //    //update the database with a new friend added 
    const sendMoneytofriend = (evt) => {
        const friendId = evt.target.dataset.newfriend
        let friendToAdd = friendResult.find(item => item._id === friendId)
        if (friendToAdd != null) {
            openModal()
            setSendMoney(friendToAdd)
        }

    }

    // //update the database with a   friend balance and current user balance 
    const transferMoney = () => {
        const userEmail = sendMoney.email
        const userName = sendMoney.name
        let currentUser = currentUserObj.currentUser
        let userAmount = values.amount
        httpClient.FindAllUser()
            .then(serverResponse => {
                const data = serverResponse.data
                //let findCurrentUser = data.find(item => item._id === currentUser._id)
                let friendToSendTo = data.find(item => item._id === sendMoney._id)
                //let friendArray = findCurrentUser.friends
                setFriendResult(currentUserObj.friends)

                if (sendMoney != null) {
                    setSendMoney(friendToSendTo)
                }
                httpClient.InsertUpdate({
                    _id: friendToSendTo._id,
                    receivedTransactions: [...friendToSendTo.receivedTransactions, { name: currentUserObj.name, amount: values.amount, message: values.message }],
                    balance: parseFloat(friendToSendTo.balance) + parseFloat(values.amount),
                })
                .then(
                    httpClient.InsertUpdate({
                            _id: currentUserObj._id,
                            sentTransactions: [...currentUserObj.sentTransactions, { name: friendToSendTo.name, amount: values.amount, message: values.message }],
                            balance: parseFloat(currentUserObj.balance) - parseFloat(values.amount),

                    }), window.location.replace('/home'))
                    .catch(err => console.log('err', err))
            })

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
    // const modal1 = () => {
    //     return (
    //         <>
    // <Modal
    //     isOpen={modalIsOpen}
    //     onRequestClose={closeModal}
    //     style={customStyles}
    //     contentLabel="Send Money Modal"
    // >
    //      {friendResult.map(item => {
    //             return (
    //     <div className="modal-card">
    //         <header className="modal-card-head">
    //             <p className="modal-card-title" data-newfriend={item._id}>Send Money to {item.name}</p>
    //             <button className="delete" aria-label="close" onClick={closeModal}></button>
    //         </header>
    //         <section className="modal-card-body">
    //             <p className='subtitle'>How much would you like to transfer</p>
    //             <div class="field has-addons">
    //                 <p class="control">
    //                     <span class="select">
    //                         <select>
    //                             <option>$</option>
    //                             <option>£</option>
    //                             <option>€</option>
    //                         </select>
    //                     </span>
    //                 </p>
    //                 <p class="control is-expanded">
    //                     <input class="input" type="text" placeholder="Amount of money" />
    //                 </p>
    //             </div>
    //             <p className='subtitle'>Leave a messeage for your friend</p>
    //             <div class="field">
    //                 <div class="control">
    //                     <textarea class="textarea" placeholder="For the fluffy rainbow unicorn"></textarea>
    //                 </div>
    //             </div>
    //         </section>
    //         <footer className="modal-card-foot">
    //             <button className="button is-success">Submit Payment</button>
    //         </footer>
    //     </div>
    //             )}
    //      )}
    // </Modal>
    //         </>
    //     );
    // }
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
                                        <a className="button is-light saveBtn" id="seltzer" data-newfriend={item._id} onClick={sendMoneytofriend} >Send Money</a>

                                        <a className="button is-light" id="seltzer" onClick={openModal2}>Remove Friend</a>

                                    </div>
                                    <hr />
                                    {/* </article>

                            </div>

                    //     )
                    // }
                    // )} */}


                                    <form onSubmit={handleSubmit}>
                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                            contentLabel="Send Money Modal"

                                        >
                                            {/* {friendResult.map(item => { */}

                                            {/* return ( */}


                                            <div className="modal-card">

                                                <header className="modal-card-head">
                                                    <p className="modal-card-title" >Send Money to {sendMoney.name}</p>
                                                    <button className="delete" aria-label="close" onClick={closeModal}></button>
                                                </header>

                                                <section className="modal-card-body">
                                                    <p className='subtitle'>How much would you like to transfer</p>
                                                    <div id='errormsg'></div>
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
                                                            <input class="input" type= "text" placeholder="Amount of money"
                                                                onChange={handleChange}
                                                                name="amount"
                                                                value={values.amount}
                                                                onBlur={handleBlur}
                                                            />
                                                            {values.amount<0 || currentUserObj.balance < values.amount && touched.amount && 'errors' ? (
                                                                <p className="errMsg">Invalid entery. Please check your account balance or your amount.</p>
                                                            ) : ''}
                                                        </p>

                                                    </div>
                                                    <p className='subtitle'>Leave a messeage for your friend</p>
                                                    <div class="field">
                                                        <div class="control">
                                                            <textarea class="textarea" placeholder="For the fluffy rainbow unicorn"
                                                                onChange={handleChange}
                                                                name="message"
                                                                value={values.message}
                                                                onBlur={handleBlur}
                                                            ></textarea>

                                                        </div>
                                                    </div>
                                                </section>
                                                <footer className="modal-card-foot">
                                                    <button className="button is-success" type="submit"
                                                      onClick={transferMoney}
                                                      disabled={currentUserObj.balance < values.amount || values.amount<=0}
                                                      //disabled={values.amount<=0}
                                                 >Submit Payment</button>
                                                </footer>
                                            </div>
                                            {/* ) */}
                                            {/* }
                    )}   */}
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
                                    </form>
                                </article>

                            </div>


                        )
                    }
                    )}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Send Money Modal"
                    >
                        {friendResult.map(item => {
                            return (
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title" data-newfriend={item._id}>Send Money to {item.name}</p>
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
                                                <input class="input" type="text" placeholder="Amount of money" />
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
                            )
                        }
                        )}
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

                </div>
            </div>

        </>
    );

}

export default withRouter(Card);
