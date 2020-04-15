import React, {useState} from 'react';
// import './style.css'
import httpClient from '../../httpClient';



function FriendAddedBtn(currentUser, props) {
    const [addNewFriend, newFriendAdded] = useState(false);

    // const handleToggle = () => {
    //     newFriendAdded(addNewFriend => !addNewFriend)
    // }

    const [friendResult, setFriendResult] = useState([{}]);
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })

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

        }]

    const addfriend = (evt) => {
        const friendId = evt.target.dataset.newfriend
        let friendToAdd = friendResult.find(item => item._id === friendId)
        newFriendAdded(addNewFriend => !addNewFriend)
        httpClient.InsertUpdate({
            _id: currentUserObj.currentUser._id,
            friends: [...currentUserObj.currentUser.friends, { _id: friendToAdd._id, image: friendToAdd.image, name: friendToAdd.name, city: friendToAdd.city, state: friendToAdd.state }]
        })
        console.log("friend added!", friendToAdd)
    }
    
    
    return(
        <>
        <button className="button is-fullwidth is-dark is-medium" id="friend" data-newfriend={props.item._id} onClick={addfriend}>{addNewFriend ? "Friend Added!" : "Add Friend"}</button>
        
        {/* <button className="button is-light red-fish" id="addFriend">Friend Added!</button> */}
        </>
    );
}

export default FriendAddedBtn;