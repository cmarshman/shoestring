import React, { Component, setState } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'shoestring';
const CLOUDINARY_UPLOAD_URL = 'CLOUDINARY_URL=cloudinary://417155192933957:fuh6d3d3ZWEDZpaTd8VxwLOpmfk@drz1p9bbx';

class AddImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }


    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.log(err);
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    render() {
        return (
            <form>
                <div className="fileUpload">
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop an image or click to select a file to upload</p>
                        {({ getRootProps, getInputProps }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        <p>Try dropping some files, or click to select files to upload</p>
                                    }
                                </div>
                            )
                        }}
                    </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null : 
                <div>
                    <p>{this.state.uploadedFile.name}</p>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
                </div>
            </form>
        )
    }
}

export default AddImage;