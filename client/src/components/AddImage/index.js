import React, { useState } from 'react';

function AddImage() {
    //
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

    return (
        <div>
            {/* <h3>Upload image</h3> */}
            <figure className="image is-128x128">
                <img className="is-rounded" id="userPic" src={image} onChange={uploadImage} />
            </figure>
            <br />
            <input type="file"
                name="file"
                // placeholder="Upload image"
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