import React, { useState } from "react";
import httpClient from "../../httpClient";
import './style.css';

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
            message: currentUserObj.currentUser.message,
            // friendPayment: currentUserObj.currentUser.friends[0].name
            friendPayment: currentUserObj.currentUser.friends[1].amount
        }
    ]


    const usersFriends = currentUserObj.currentUser.friends;

    const friendsPayments = currentUserObj.currentUser.friends.slice(1);

    console.log(friendsPayments);
    const userName = currentUserObj.currentUser.name;


    return (
        <div className="tile is-child box is-fullwidth">
            <div>
                <p className="subtitle" id="payments">My Transactions</p>
                {friendsPayments.length > 1 ?
                    friendsPayments.map(item => {
                        return (
                            <article key={item._id} className="media is-scrollable" id="paymentList">
                                <figure className="media-left">
                                    <p className="image is-square is-48x48">
                                        <img className="is-rounded" src={item.image} alt={item.name}/>
                                    </p>
                                    {/* <img className="is-rounded is-48x48" id="friendImage" src={item.image} alt={item.name} />
                                    <p>{item.name} paid {userName} for {item.message}</p> */}
                                </figure>
                                <div className="transactionInfo">{item.name} paid {userName} for {item.message}</div>

                                <hr />
                            </article>
                        )
                    }
                    )
                    :
                    <p></p>

                }
            </div>
        </div>


    )

}

export default Payments;