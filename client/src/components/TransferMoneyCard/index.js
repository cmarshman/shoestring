import React, { useState, useEffect } from 'react';
import './style.css';
import MyImage from '../MyImage';
import UserNameCard from '../UserNameCard';
import httpClient from '../../httpClient';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import $, { data } from 'jquery';
import moment from 'moment';


//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
    email: Yup.string().required(),
    name: Yup.string().required(),
    amount: Yup.number().required(),
    message: Yup.string().required(),

});

function TransferMoneyCard() {

    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            name:'',
            amount: 0,
            message: '',

        },
        validationSchenma,
        onSubmit(values) {
            console.log('values', values)
            transferMoney(values)
        }
    });


    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })

    var createdDate = currentUserObj.currentUser.date
    //console.log(Yup.date)
    createdDate = moment().format('LL');
    let currentUser = currentUserObj.currentUser
     
    const sendMoney = () =>{
        httpClient.InsertUpdate({
           _id: currentUser._id,
            sentTransactions: [...currentUser.sentTransactions, {amount: values.amount, message: values.message}],
            balance: parseInt(currentUser.balance) - parseInt(values.amount),
            date: createdDate
        })
    }

    const transferMoney = (evt) => {
        const userEmail = values.email.toLocaleLowerCase
        const userName = values.name.toLocaleLowerCase
        let currentUser = currentUserObj.currentUser
        httpClient.FindAllUser()
        .then(serverResponse => {
            const data = serverResponse.data
            let findEmail = data.find(item => item.email === userEmail && item.name === userName)
            let findCurrentUser = data.find(item => item._id === currentUser._id)
            console.log("find", findEmail)
             if (findEmail === undefined || findEmail.email ===findCurrentUser.email || userName === findCurrentUser.name) {
                console.log("findEmail", findEmail)
                $('#errormsg').attr("style", "color:red")
                $('#errormsg').text("Your Friend is not found. Make sure your friend's email and name are correct.");
                return
            }
            httpClient.InsertUpdate({
                    _id: findEmail._id,
                    //receivedTransactions: [{...{amount: values.amount, ...{message: values.message}}}],
                    receivedTransactions:[...findEmail.receivedTransactions, {amount: values.amount, message: values.message}],
                    balance: parseInt(findEmail.balance) + parseInt(values.amount),
                    date:  createdDate,
            })
            httpClient.InsertUpdate({
                    _id: findCurrentUser._id,
                    //receivedTransactions: [{...{amount: values.amount, ...{message: values.message}}}],
                    sentTransactions:[...findCurrentUser.sentTransactions, {amount: values.amount, message: values.message}],
                    balance: parseInt(findCurrentUser.balance) - parseInt(values.amount),
                    date:  createdDate,
            })
            .then(response => {
                        console.log('response', response)   
            })   
            .then(window.location.replace('/home'), 
                 httpClient.InsertUpdate({
                    _id: findCurrentUser._id,
                     sentTransactions:[...findCurrentUser.sentTransactions, {amount: values.amount, message: values.message}],
                    balance: parseInt(findCurrentUser.balance) - parseInt(values.amount),
                    date:  createdDate,
                }))
                .catch(err => console.log('err', err))
            })
    }
//Render all the data
    return (

        <form onSubmit={handleSubmit}>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-9 container column is-fluid">
                        <div className="tile is-vertical is-parent" >
                            <div className="tile is-child box has-text-centered" >
                                <a className="title is-centered" href='/home'>
                                    <MyImage />
                                </a>
                                <br />
                                <UserNameCard />
                                <p id="funds">Funds Available: {currentUserObj.currentUser.balance}</p>
                                <p id="member">Member Since: {createdDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='errormsg'></div>
                <div className="tile is-ancestor columns is-centered" id="waldos_nothere">
                    <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                        <p className="subtitle has-text-centered">
                            Transfer money to your friend
                    </p>
                        <p>Enter your friend's email to start the transfer</p>
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Enter your  friend's email or phone. . . "
                                onChange={handleChange}
                                name="email"
                                value={values.email}
                                onBlur={handleBlur} />
                            <div id='errormsg'></div>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user-circle"></i>
                            </span>
                        </p>
                        <p>Enter your friend's name</p>
                        <p class="input control">
                        {/* <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Enter your  friend's name . . . "
                                onChange={handleChange}
                                name="name"
                                value={values.name}
                                onBlur={handleBlur} />
                            {/* <div id='errormsg'></div> */}
                            {/* <span className="icon is-small is-left">
                            <i className="fas fa-user-astronaut"></i>
                            </span> */}
                       {/* </p>  */}

                       <select 
                         name="name"
                         value={values.name} 
                         onChange={handleChange}
                         onBlur={handleBlur}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                       </select>
                       </p>
                        <p>Enter the amount you would like to transfer</p>
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="$50"
                                onChange={handleChange}
                                name="amount"
                                value={values.amount}
                                onBlur={handleBlur} />
                            {/* {values.amount.length <1 &&  touched.amount && 'errors' ? (
                              <p className="errormsg">Please enter a valid amount</p>
                        ): ''} */}
                            <span className="icon is-small is-left">
                                <i className="fas fa-money-bill-wave-alt"></i>
                            </span>
                        </p>
                        <p>Leave a messeage for your friend</p>
                        <textarea className="textarea" placeholder="For fluffy rainbow unicorn"
                            onChange={handleChange}
                            name="message"
                            value={values.message}
                            onBlur={handleBlur} />
                        {/* {values.message.length <10 &&  touched.amount && 'errors' ? ( */}
                        {/* <p className="errormsg">Please enter a valid message</p>
                    ): ''} */}

                        {/* </textarea> */}
                        <br />
                        <a className="button is-light" id="deposit" type="submit"
                            onClick={transferMoney}>Transfer Money</a>

                    </div>
                </div>
            </div>
        </form>

    )
}

export default TransferMoneyCard;