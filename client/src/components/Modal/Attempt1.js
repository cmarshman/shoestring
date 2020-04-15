import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import httpClient from "../../httpClient.js";

function Example(currentUser) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        }
    ]
    //variable for user's friends list
    let usersFriends = currentUser[0].friends;
    const addfriend = (evt) => {
        const friendId = evt.target.dataset.myfriend
        const friendToAdd = usersFriends.find(item => item._id === friendId)
        console.log(" Hello ", friendToAdd)
        this.props.history.push('/')
        .then(currentUser = friendToAdd)
        //setCurrentUserObj(friendToAdd);
        //usersFriends = friendToAdd;
        // httpClient.InsertUpdate({
        //     _id: currentUserObj.currentUser._id,
        //     friends: [...currentUserObj.currentUser.friends, { image: friendToAdd.image, name: friendToAdd.name, city: friendToAdd.city, state: friendToAdd.state }]
        // })
    }
    //console.log(" Hello ", usersFriends)


  
    return (
      <>
      <div>
        <button variant="primary" onClick={handleShow}>
          Launch demo modal
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>{}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button variant="primary" onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
        </div>
      </>
    );
  }
  
  export default Example;