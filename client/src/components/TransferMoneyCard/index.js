import React, { useState, useEffect } from 'react';
import './style.css';
import FriendCard from '../FriendCard';
import MyImage from '../MyImage';
import UserNameCard from '../UserNameCard';
import httpClient from '../../httpClient';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import $ from 'jquery'


   //Setup  validation condition on the schema using Yup
   const validationSchenma = Yup.object({
    name:   Yup.string().required(),
    amount: Yup.number().required(),
    message: Yup.string().required(),
     
});
     

function TransferMoneyCard () {

    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            amount: null,
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

  console.log("current", currentUserObj)
    // Function to update the image in the database
    const updateUser = () =>{
        httpClient.InsertUpdate({
            _id:  currentUserObj.currentUser._id,
            amount: values.amount,
            message: values.message
        })
    }
     

 

//Function to handle the transfert money form
//const transferMoney = () => {

    const usersFriends = currentUserObj.friends;
    console.log("friends", usersFriends)
    //Function 
    const transferMoney = (evt) =>{
        const userEmail = values.email 
        httpClient.FindAllUser()   
        .then(serverResponse => {
          const data = serverResponse.data
          let findEmail=data.find(item =>item.email===userEmail)
            console.log("find", findEmail)
            if(findEmail === undefined){
                console.log("findEmail", findEmail)
                $('#errormsg').attr("style", "color:red")
                $('#errormsg').text("Email not found- try again.");
                return
            }
            //Insert the new password after update
            httpClient.InsertUpdate({
                _id:  findEmail._id,
                amount: values.amount,
                message: values.message
            })
            .then(response => {
                console.log('response', response)
            })
            .then(window.location.replace('/home'))
            .catch(err => console.log('err', err))
        })
    }

       //console.log("value", values)  

    return(
        
        <form onSubmit={handleSubmit}>
        <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid" >
                        <div className="tile is-7 is-vertical is-parent"  >
                            <div className="tile is-child box has-text-centered">
                                <a className="title is-centered" href='/home'>
                                    <MyImage/>
                                </a>
                                <br/>
                                <UserNameCard/>
                                <p id="funds">Funds Available: $100</p>
                            <p id="member">Member Since: April 2019</p>
                            </div>  
                        </div>
                            <FriendCard/>
                    </div>
                </div>
                <div className="tile is-ancestor columns is-centered" id="waldos_nothere">
                <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                    <p className="subtitle has-text-centered">
                        Transfer money to your friend
                    </p>
                    <p>Enter your friend's email to start the transfer</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text"  placeholder="Enter your  friend's email . . . " 
                         onChange={handleChange}
                         name="email"
                         value={values.email}
                         onBlur={handleBlur} />
                        <div id='errormsg'></div>
                        <span className="icon is-small is-left">
                        <i className="fas fa-user-circle"></i>
                        </span>
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
                    <br/>
                    <a className="button is-light" id="deposit" type="submit"
                    onClick={transferMoney}>Transfer Money</a>

                </div>
                </div>
        </div>
        </form>
         
    )
}

export default TransferMoneyCard;