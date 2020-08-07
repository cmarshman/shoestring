import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import '../AddImage/style.css'


//main function to contain all the other add image functions.  
function ProfileImage() {

    //Set current user state
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    //Set uploaded image state
    const [image, setImage] = useState({
    });
    const [loading, setLoading] = useState(false);
    const [friendResult, setFriendResult] = useState([{}]);

 //Load funtion on page load
    useEffect(() => {
        handleSearch()
        
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
         window.location.reload()
    }
   
      //Function to load all user on page load
      const handleSearch = () => {
        httpClient.FindAllUser()
       
            .then(serverResponse => {
                setFriendResult(serverResponse.data);
                let currentUserId = currentUserObj.currentUser._id
                let findImg = serverResponse.data.find(item => item._id === currentUserId)
             setFriendResult([findImg])
              
            })
            .catch(err => { console.log(err) })            
    }

    //Function to render page with uploaded image
    return (

        <>
             {currentUserObj.currentUser !== null ? (
                <div>
                    <br />

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
                                {/* <br />
                                <div className="is centered">    
                                <input 
                                    type="file"
                                    name="file"
                                    placeholder="Upload image"
                                    onChange={uploadImage}
                                     
                                />
                                </div> */}
                            </div>
                          )
                          } 
                          )}  
                </div>
               ): window.location.replace("/")}
        </>
    )
}

export default ProfileImage;