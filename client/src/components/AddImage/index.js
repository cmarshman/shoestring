import React, { useState } from 'react';
import httpClient from '../httpClient'


function AddImage() {
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
      
   })

//Restructuring the data received from history 
   currentUser =[
       {
       firstName:currentUserObj.currentUser.firstName,
       lastName: currentUserObj.currentUser.lastName,
       phone: currentUserObj.currentUser.phone,
       email: currentUserObj.currentUser.email,
       password: currentUserObj.currentUser.password,
   }]

   // Load the available token on pageload from local storage
    useEffect(() => {
       onLoginSuccess()
         
   }, [])

    const onLoginSuccess= (user) =>{
       setCurrentUserObj({ currentUser: httpClient.getCurrentUser(user) })
        console.log("currentUserObj " , currentUserObj )
       console.log("user " , currentUserObj.currentUser.firstName)
   }

    //image and loading states
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

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
        console.log(file.secure_url)
    }
    console.log(currentUser)
    // .then {
        //require database, find user and update
//console log id and url to update table
    // }



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
                    <figure className="image is-128x128">
                        {/* <placeholder>Here we are</placeholder> */}
                        <img className="is-rounded" src={image} />
                    </figure>
                )}
                <br/>

            <input type="file"
                name="file"
                placeholder="Upload image"
                onChange={uploadImage}
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