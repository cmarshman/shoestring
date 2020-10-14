import React, { useState, useEffect } from "react";
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import httpClient from "../../httpClient.js";
import * as Yup from 'yup';
import { useFormik, yupToFormErrors } from 'formik';
 
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

function FriendsCard() {

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
    const [deleteFriend, setdeleteFriend] = useState([{}]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modal2IsOpen, set2IsOpen] = useState(false);

    //Load funtion on page load
    useEffect(() => {
        handleFriends();
        
    }, [])
   
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

    //update the database with a new friend added 
    const sendMoneytofriend = (evt) => {
        const friendId = evt.target.dataset.newfriend
        let friendToAdd = friendResult.find(item => item._id === friendId)
        if (friendToAdd != null) {
            openModal()
            setSendMoney(friendToAdd)
        }
    }

    //update the database with a new friend added 
    const removeAfriend = (evt) => {
        const friendId = evt.target.dataset.removefriend
        let friendToRemove = friendResult.find(item => item._id === friendId)
        if (friendToRemove != null) {
            openModal2()
            setdeleteFriend(friendToRemove)
        }

    }

    //update the database with a friend balance and current user balance 
    const transferMoney = () => {
        httpClient.FindAllUser()
            .then(serverResponse => {
                const data = serverResponse.data
                 let friendToSendTo = data.find(item => item._id === sendMoney._id)
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
   //Function to remove a friend from friends list
    const removeFriend = () => {
        let currentUserFriends = currentUserObj.friends;
        httpClient.FindAllUser()
            .then(serverResponse => {
                const data = serverResponse.data
                const friendToRemove = data.find(item => item._id === deleteFriend._id)
                const removefriendArr = friendToRemove.friends
                let filterCurrentUserOut = removefriendArr.filter(item => item._id !=currentUserObj._id)
                let newFriends = currentUserFriends.filter(item => item._id !=friendToRemove._id)
                setFriendResult(newFriends)
                //update the database with the remaining friends
                httpClient.InsertUpdate({
                    _id: currentUserObj._id,
                    friends: [...newFriends]
                })
                httpClient.InsertUpdate({
                    _id: friendToRemove._id,
                    friends: [...filterCurrentUserOut]
                })
                .then(
                    closeModal2(),
                    window.location.replace('/home'))
                    
                .catch(err => console.log('err', err))
            })
   
}
//Render all the logged in user Friends
    return (
        <>
            <br />
            <div className="is-fluid" id="craftCoffee">
                <div className="tile is-child has-text-centered" id="unicornDuck">
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

                                        <a className="button is-light" id="seltzer2" data-removefriend={item._id} onClick={removeAfriend}>Remove Friend</a>

                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit}>
                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                            contentLabel="Send Money Modal"

                                        >

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
                                                            <input class="input" type="text" placeholder="Amount of money to send"
                                                                onChange={handleChange}
                                                                name="amount"
                                                                value={values.amount}
                                                                onBlur={handleBlur}
                                                            />
                                                            {values.amount < 0 || currentUserObj.balance < values.amount && touched.amount && 'errors' ? (
                                                                <p className="errMsg">Please check your account balance or your amount.</p>
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
                                                        disabled={currentUserObj.balance < values.amount || values.amount <= 0}
                                                     >Submit Payment</button>
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
                                                    <p className="modal-card-title" >Are you sure you want to remove {deleteFriend.name}</p>
                                                    <button className="delete" aria-label="close" onClick={closeModal2}></button>
                                                </header>
                                                <section className="modal-card-body">

                                                </section>
                                                <footer className="modal-card-foot">
                                                    <button className="button is-success" type="submit" onClick={removeFriend}>I'm sure</button>
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

                </div>
            </div>
        </>
    );

}
export default withRouter(FriendsCard);

