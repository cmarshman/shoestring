import React, { useState, useEffect } from "react";
import httpClient from "../../httpClient";
import './style.css';

function Payments(currentUser) {
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });
    const [friendResult, setFriendResult] = useState([{}]);

    useEffect(() => {
        handleSearch()

    }, [])

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
             
        }
    ]


    const usersFriends = currentUserObj.currentUser.friends;

    const friendsPayments = currentUserObj.currentUser.friends.slice(1);

    // console.log(friendsPayments);
    const userName = currentUserObj.currentUser.name;

    const handleSearch = () => {
        httpClient.FindAllUser()

            .then(serverResponse => {
                setFriendResult(serverResponse.data);
                let currentUserId = currentUserObj.currentUser._id
                let findPayment = serverResponse.data.find(item => item._id === currentUserId)
                let findFriend = findPayment.friends.slice(1)
                console.log(findPayment)
                setFriendResult([findPayment])


            })
            .catch(err => { console.log(err) })
    }

    // console.log("hello", friendResult)
    // console.log(currentUserObj.currentUser.message)
    // console.log(friendResult)

    return (
        <div className="tile is-child box is-fullwidth" id="payments">
            <div>
                <p className="subtitle" >My Transactions</p>
                {friendResult.length > 0 ?
                    friendResult.map(item => {
                        return (
                            <article key={item._id} className="media is-scrollable" id="paymentList">
                                <figure className="media-left">
                                    <p className="image is-square is-48x48">
                                        <img className="is-rounded" src={item.image} alt={item.name} />
                                    </p>
                                    {/* <img className="is-rounded is-48x48" id="friendImage" src={item.image} alt={item.name} />
                                    <p>{item.name} paid {userName} for {item.message}</p> */}
                                </figure>
                                <div className="transactionInfo">{item.name} just got paid for {item.message}</div>

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