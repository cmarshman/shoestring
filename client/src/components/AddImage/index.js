import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import './style.css'
 

function AddImage(props, currentUser) {
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // Load the available token on pageload from local storage
    useEffect(() => {
        //onLoginSuccess();
        //findOneUser()
        //handleImage()
    },[currentUserObj.currentUser.image])

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

        console.log("other image", file.secure_url)

        //Restructuring the data received from history 
        currentUser = [
            {
                _id: currentUserObj.currentUser._id,
                firstName: currentUserObj.currentUser.firstName,
                lastName: currentUserObj.currentUser.lastName,
                phone: currentUserObj.currentUser.phone,
                email: currentUserObj.currentUser.email,
                password: currentUserObj.currentUser.password,
                image:  currentUserObj.currentUser.image,
                
            }]
            //const onLoginSuccess= (currentUser) =>{
                setCurrentUserObj({ currentUser: httpClient.getCurrentUser(...currentUser), image:file.secure_url })
                 console.log("currentUserObj " , currentUserObj )
              //}
        console.log("user image", currentUser[0].image)

        httpClient.InsertUpdate({
            _id: currentUserObj.currentUser._id,
            image: file.secure_url
        })


        const findOneUser = () => {
            httpClient.FindUser({
                image: file.secure_url
            })
           // console.log("image", image)
    }

        //     const onLoginSuccess = (user) => {
        //         setCurrentUserObj({ currentUser: httpClient.getCurrentUser(user) })
        //         //  console.log("currentUserObj " , currentUserObj )
        //         // console.log("user " , currentUserObj.currentUser.firstName)
        //     }
    }
    console.log(image)
     

    function handleImage(event) {
        const { name, value } = event.target;
        setCurrentUserObj({ ...currentUser, [name]: value })
        console.log("input ", { name, value })
    };

 //const my_image = currentUserObj.currentUser.image
    const my_image = currentUserObj.currentUser.image

    return (
        <div>
            {/* <h3>Upload image</h3> */}
            {/* <figure className="image is-128x128">
                <img className="is-rounded" id="userPic" src={image} onChange={uploadImage} />
            </figure> */}
            <br />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                    <figure className="image is-centered">
                        {/* <placeholder>Here we are</placeholder> */}
                        <img className="is-rounded" src={my_image} />
                    </figure>
                )}
            <br />

            <input type="file"
                name="file"
                placeholder="Upload image"
                value={currentUser.image}
                onChange={uploadImage}
                //onChange={findOneUser}
            />
            {/* {loading ? (
                <h3>Loading...</h3>
            ) : (
                    <img src={image} style={{ width: '300px' }} />
                )} */}

        </div>
    )
}

export default AddImage;