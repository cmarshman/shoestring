import React, { useEffect } from 'react';
import NavBarAuth from '../components/NavBarAuth';
import $ from 'jquery';
import "./design/Home.css"
import "./design/CancelAccount.css"

function RequestData() {
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
                        <p className='title' id='CancelAccount'>Request My Data</p>
                        <p id='CancelAccount'>At Shoestring we believe your data is your own. We utilize your personal data to offer you a better user experience. For more information on how we use your data please read through our Privacy Policy. However, we believe you should have access to the data we have and to how we have used it. By submitting a data request below, you will receive a comprehensive and up-to-date look at the data we have collected and how it has been used. Please allow 7-10 business days for us to compile your data, we will then email you at the email we have on file.</p>
                        <br/>
                        <form action="https://formspree.io/xyydooyo" method="POST" target="_blank" id='myForm'>
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

export default RequestData;