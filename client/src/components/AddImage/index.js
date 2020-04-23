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
   let  myImage =currentUserObj.currentUser.image
    
    const [image, setImage] = useState({
             image: myImage
    });
    const [loading, setLoading] = useState(false);
    const [friendResult, setFriendResult] = useState([{}]);

    //setFriendResult([{...friendResult, image:image}])

    useEffect(() => {
        //findImage()
        //handleInputChange())
        handleSearch()
        //setFriendResult([{friendResult}])
        //findImage()
        //setImage([image])
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
        // httpClient.FindAllUser()
        //     .then(response => {
        //         const data = response.data
        //         //setFriendResult(data);
        //         //if (value !== "") {
        //         let findImage = data.find(item => item._id === currentUserId)
        //         setImage({image:findImage.image});
        //         console.log('filteredArr', findImage)
        //         //}
        //     })
        //     .catch(err => { console.log(err) })
        //}

    }
    //Variable to setup user
    const findImage = () => {
        httpClient.FindUser({
            _id: currentUserObj.currentUser._id,
            //image: image.image

        }).then(data => {
            setImage(data)
            console.log("data", data)
        })
    }

      //Function to load all user on page load
      const handleSearch = () => {
        httpClient.FindAllUser()
       
            .then(serverResponse => {
                setFriendResult(serverResponse.data);
                //let findImg = data.find(item => item._id === currentUserId)
                let currentUserId = currentUserObj.currentUser._id
                let findImg = serverResponse.data.find(item => item._id === currentUserId)
             setFriendResult([findImg])
            })
            .catch(err => { console.log(err) })            
    }


    const handleInputChange = () => {
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
                setFriendResult([{findImage}]);
                console.log('filteredArr', findImage)
                //}
            })
            .catch(err => { console.log(err) })
    }

    console.log('friendResult', image)
    //variable to setup the image to display
    const currentUserID = currentUserObj.currentUser._id
    const my_image = image.image
    console.log('db image', my_image)

    //let findOne = friendResult.find(item => item._id === currentUserID)
    //let findOne ;
    console.log('db image', friendResult)
    //Function to render page with uploaded image
    return (

        <>
        {/* { findOne = friendResult.find(item => item._id === currentUserID)} */}
            {currentUserObj.currentUser !== null ? (
                <div>
                    {/* <br /> */}

                    { friendResult.map(item =>{ 
                         return (
                            <div key={item._id}> 
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <figure className="image is-centered">
                                            <img id="myPhoto" className="is-rounded"  src={item.image} alt="myPhoto" />
                                        </figure>
                                    )}
                                <br />

                                <input type="file"
                                    name="file"
                                    placeholder="Upload image"
                                    onChange={uploadImage}
                                    //onInput={handleInputChange}
                                />
                            </div>
                          )
                          } 
                          )}  
                </div>
               ): window.location.replace("/")}
            {/* ) */}
        </>
    )
}

export default AddImage;