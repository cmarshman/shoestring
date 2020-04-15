import React, { useState } from "react";
import httpClient from "../../httpClient";

function Payments(currentUser) {
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });

    currentUser = [
        {
            _id: currentUserObj.currentUser._id,
            friends: currentUserObj.currentUser.friends,
            name: currentUserObj.currentUser.name,
            phone: currentUserObj.currentUser.phone,
            city: currentUserObj.currentUser.city,
            state: currentUserObj.currentUser.state,
            email: currentUserObj.currentUser.email,
            password: currentUserObj.currentUser.password,
            image: currentUserObj.currentUser.image,
            amount: currentUserObj.currentUser.amount,
            message: currentUserObj.currentUser.message
        }
    ]

    const myMoney = currentUserObj.currentUser.amount;
    const myMessage = currentUserObj.currentUser.message;

    return (
        <div className="tile is-child box is-fullwidth">
            <div>
                {/* {usersFriends.map(item => (
                    <article key={item._id} className="is-scrollable friend" id="friendSelector" data-friend={item._id}>
                        <figure id="block">
                            <Link to='/transfermoney'>
                            <p className="image has-text-centered" id="friendPic">
                            <div className="is-centered">
                            <img className="is-rounded is-48x48" id="userPhoto" src={item.image} alt="userImage" />
                            </div>
                            {item.name}
                            </p>
                            </Link>
                        </figure>
                        <div>
                            <h3 className="has-text-centered" id="location">{item.city}</h3>
                        </div>
                        <hr/>
                    </article>
                )
                )} */}

                <p className="title" id="paymentList">Payments</p>
                <p>Lisa paid  for {myMessage}</p>
                <p>Jeff paid Jesus for rent</p>
            </div>
        </div>


    )

}

export default Payments;