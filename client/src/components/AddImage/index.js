import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import './style.css'


//main function to contain all the other add image functions.  
function AddImage() {

    //Set current user state
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    //Set uploaded image state
    const [image, setImage] = useState({
        image: ""
    });
    const [loading, setLoading] = useState(false);
    const [friendResult, setFriendResult] = useState([{}]);

    useEffect(() => {
        //findImage()
        setFriendResult(friendResult)
    }, [])

    //Function to setup image upload
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'shoestring')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/drz1p9bbx/image/upload', {
            method: 'POST',
            body: data
        }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
        console.log(file.public_id)

        //Function to update the image in the database
        httpClient.InsertUpdate({
            _id: currentUserObj.currentUser._id,
            image: file.secure_url
        })
        //const handleInputChange = evt => {
        const currentUserId = currentUserObj.currentUser._id
        console.log("id:", currentUserId)
        //let friendToAdd = friendResult.find(item => item._id === friendId)
        //const value = event.target.value;
        httpClient.FindAllUser()
            .then(response => {
                const data = response.data
                setFriendResult(data);
                //if (value !== "") {
                let findImage = data.find(item => item._id === currentUserId)
                setFriendResult(findImage);
                console.log('filteredArr', findImage)
                //}
            })
            .catch(err => { console.log(err) })
        //}

    }
    //Variable to setup user
    const findImage = () => {
        httpClient.FindUser({
            image: image

        }).then(data => {
            setImage(data)
            console.log("data", data)
        })
    }

    const handleInputChange = evt => {
        const currentUserId = currentUserObj.currentUser._id
        console.log("id:", currentUserId)
        //let friendToAdd = friendResult.find(item => item._id === friendId)
        //const value = event.target.value;
        httpClient.FindAllUser()
            .then(response => {
                const data = response.data
                setFriendResult(data);
                //if (value !== "") {
                let findImage = data.find(item => item._id === currentUserId)
                setFriendResult(findImage);
                console.log('filteredArr', findImage)
                //}
            })
            .catch(err => { console.log(err) })
    }

    console.log('friendResult', friendResult.image)
    //variable to setup the image to display
    const currentUserID = currentUserObj.currentUser._id
    const my_image = friendResult.image

    //Function to render page with uploaded image
    return (

        <>
            {currentUserObj.currentUser !== null ? (
                <div>
                    <br />



                    {removeUser.map(item => {
                        return (
                            <div>
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <figure className="image is-centered">
                                            <img id="myPhoto" className="is-rounded" src={my_image} alt="myPhoto" />
                                        </figure>
                                    )}
                                <br />

                                <input type="file"
                                    name="file"
                                    placeholder="Upload image"
                                    onChange={uploadImage}
                                //={handleInputChange}
                                />
                            </div>

                        ): window.location.replace("/")}
        </div>
        </>
            )
}





            {/* {loading ? (
                  <h3>Loading...</h3>
              ) : (
                      <figure className="image is-centered">
                          <img id="myPhoto" className="is-rounded" src={my_image} alt="myPhoto"/>
                      </figure>
                  )}
              <br />
  
              <input type="file"
                  name="file"
                  placeholder="Upload image"
                  onChange={uploadImage}
                  //={handleInputChange}
               />
          </div>
             
        ): window.location.replace("/")}
        
        </>
    )
} */}

export default AddImage;