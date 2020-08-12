import React, { useState, useEffect } from "react";
import httpClient from "../../httpClient";
import './style.css';

function Payments() {
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    });
    const [friendResult, setFriendResult] = useState([{}]);

    useEffect(() => {
        handleSearch()

    }, [])

    
    //set data on load
     const handleSearch = () => {
        httpClient.FindAllUser()

            .then(serverResponse => {
                let currentUserId = currentUserObj.currentUser._id
                let findPayment = serverResponse.data.find(item => item._id === currentUserId)
                let findFriend = findPayment.sentTransactions.slice(1)
                console.log(findFriend)
                setFriendResult(findFriend)
                setCurrentUserObj(findPayment)

            })
            .catch(err => { console.log(err) })
    }

   //map all the tranctions for current user transactions
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
                                        <img className="is-rounded" src={currentUserObj.image} alt={currentUserObj.name} />
                                    </p>
                                </figure>
                                <div className="transactionInfo">You just paid {item.name} for: {item.message}</div>

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