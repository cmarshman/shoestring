import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import './style.css'
 

function AddImage(props, currentUser, findImage, data, file) {
 
    //Set current user state
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
   })
    //Set uploaded image state
    const [image, setImage] = useState({
        
    });
    const [loading, setLoading] = useState(false);
    
    // Load the available token on pageload from local storage
   useEffect(() => {
        
        //setImage({data})
        //()
    },[])
   
    //console.log("currentUserObj " , currentUser )
 
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
      
}
//Variable to setup user
let thisImage= image  
//console.log('thisImage', thisImage)

       httpClient.FindUser ({
        image: currentUserObj.currentUser.image,
        image: image 
             
        }).then(data =>{
           // console.log("all", data)
            setImage(data)
    })
    //console.log("outside", data)
    // httpClient.FindAllUser()   
    //     .then(serverResponse => {
    //      const data = serverResponse.data
    //      let findImage= data.find(item =>item.image===thisImage)
    //      console.log("all please", findImage)
    //      setImage(findImage)
    //      //myimage = {findImage}
    //     // .then(findImage =>{
    //     //     console.log("all", findImage)
    //     // })
    // }).then(findImage.map(item =>{
    //     console.log('result',item.image)

    // })
    // )   
    //})

    //      //Function to handle  search for user on load     
    //      const handleInputChange = event => {
    //         const value = event.target.value.toLowerCase();
    //          httpClient.FindAllUser()   
    //          .then(response=> {
    //             const data = response.data
    //             setFriendResult(data);        
    //           if (value !=="")  {
    //            const filteredArr = data.filter(result => {
    //            return result.name.includes(value) || result.date.includes(value)
    //            || result.email.includes(value) || result.phone.includes(value)
    //           })
    //            setFriendResult(filteredArr); 
    //         }
    //         }) 
    //         .catch(err =>{console.log(err)})
    // }
    

const my_image= currentUserObj.currentUser.image  
  
//console.log('findImage',result)
  

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
                        <img id="myPhoto" className="is-rounded" src={my_image} alt="myPhoto"/>
                    </figure>
                )}
            <br />

            <input type="file"
                name="file"
                placeholder="Upload image"
                //value={ file.secure_url}
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