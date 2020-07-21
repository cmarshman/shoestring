import React, { useEffect } from 'react';
import NavBarAuth from '../components/NavBarAuth';
import $ from 'jquery';
import "./design/Home.css"
import "./design/CancelAccount.css"

function CancelAccount() {
    useEffect (() => {
        $("#contactMe").click(function (){
            window.location.reload();
        })
    })
    
    return (
        <>
        <NavBarAuth />
        <div className="tile is-ancestor">
            <div className="tile is vertical is-7 box" id="tile">

                <div className="tile is-parent">
                    <article className="tile is-child notification is-dark">
                        <p className='title' id='CancelAccount'>Send Cancelation Notice</p>
                        <p id='CancelAccount'>By sending a Cancelation Notice you are acknowledging your desire to cancel your account. Depending on your country of origin we may require additional information. Submitting a Cancelation Notice DOES NOT cancel your account. A representative will follow up with you via the email you have in your profile. Please note that all pending transactions will NOT be canceled by submitting a Cancelation Notice and all money currently in your wallet will ONLY be transfered to the bank account we have on file, once the cancelation has been finialized. Again this does not cancel any actions currently pending, clear your information nor empty your wallet. This will ONLY happen once your notice has been finialized by a representative. </p>
                        <br/>
                        <form action="https://formspree.io/xqkdnwog" method="POST" target="_blank" id='myForm'>
                            <div className="field" id="contact_me">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" name="_replyto" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" name="name" placeholder="Name" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-portrait"></i>
                                    </span>
                                </p>
                            </div>
                            <textarea className="textarea" name="message" placeholder="Leave your comments . . .">
                            </textarea>
                            <br />
                            <div className="field">
                                <p className="control">
                                    <button className="button is-light" onClick={useEffect} type="submit" id="contactMe">
                                        Submit
                                        </button>
                                </p>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    </>
    )
}

export default CancelAccount;