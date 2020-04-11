import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';
import './style.css'
 

function AddImage(props, currentUser, findImage, data, file) {


    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
})
    
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    
    // Load the available token on pageload from local storage
   // useEffect(() => {
        //onLoginSuccess();
        //findOneUser()
        //handleImage()
       //resetUser()
        //setImage({image})
        //()
    //},[])
   
 
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

        console.log("image", file.secure_url)
        console.log("image", image)
        let myimage;
        
        
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
           // ({...currentUserObj , image:file.secure_url})
            //const onLoginSuccess= (currentUserObj) =>{
                setCurrentUserObj({ currentUser: httpClient.getCurrentUser([{...currentUser, image : file.secure_url}])
                     
              })
            //}

            console.log("currentUserObj " , currentUser )
      
         
        console.log("user image")

       // currentUserObj.currentUser.image = file.secure_url

        httpClient.InsertUpdate({
            _id: currentUserObj.currentUser._id,
            image: file.secure_url
        })
        httpClient.FindAllUser()   
        .then(serverResponse => {
         const data = serverResponse.data
         let findImage= data.find(item =>item.image===file.secure_url)
         console.log("all please", findImage)
         myimage = {findImage}
        // .then(findImage =>{
        //     console.log("all", findImage)
        // })
    })
    
    console.log("all", myimage)
        // httpClient.FindUser ({
        //     image: currentUserObj.currentUser.image,
        //     //     image: findImage.image =>{
             
        // }).then(data =>{
        //     console.log("all", data)
        // })
         
   // }

        //const resetUser = (evt) =>{
            //const userEmail = values.email 
            // httpClient.FindAllUser()   
            // .then(serverResponse => {
            //   const data = serverResponse.data
            //   let findImage= data.find(item =>item.image===file.secure_url)
              //setImage(findImage.image)
                //console.log("find", findImage.image)
            //     if(findImage === undefined){
            //         console.log("findEmail", findImage)
            //    // console.log("find", findImage)
            //         setImage(findImage.image)
            //         //$('#errorMsg').attr("style", "color:red")
            //         //$('#errorMsg').text("Email not found- try again or register.");
                    
            //     }
                //Insert the new password after update
                // httpClient.FindUser({
                //    // _id: findImage._id
                //     image: findImage.image
                // })
                // .then(user =>{
                //     console.log('user', user)
                //     setImage(image)
                //     console.log('user1', findImage.image)
                // })
//.catch(err => console.log('err', err))
            // })
        //}
       // console.log("findreal", findImage.image)

    //     const findOneUser = () => {
    //         httpClient.FindUser({
    //             image: file.secure_url
    //         })
    //        // console.log("image", image)
    // }
//}
        //     const onLoginSuccess = (user) => {
        //         setCurrentUserObj({ currentUser: httpClient.getCurrentUser(user) })
        //         //  console.log("currentUserObj " , currentUserObj )
        //         // console.log("user " , currentUserObj.currentUser.firstName)
        //     }
    //}
    //console.log('data' , data.image)
     

   

    function handleImage(event) {
        const { name, value } = event.target;
        setCurrentUserObj({ ...currentUser, [name]: value })
        console.log("input ", { name, value })
    };

}

const my_image= currentUserObj.currentUser.image  
console.log('last chance',{image})
//const my_image = image
console.log('',{my_image})
    //const my_image =  file.secure_url
    //setImage(findImage.image)

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