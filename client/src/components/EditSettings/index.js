import React from 'react';
import Name from '../PersonalInfo/Name';
import PhoneNumber from '../PersonalInfo/PhoneNumber';
import Location from '../PersonalInfo/Location';
import Email from '../PersonalInfo/Email';
import Password from '../PersonalInfo/Password';
import AddImage from '../AddImage';

function EditSettings() {
    return (
                <div className="column is-two-thirds content" id="personal-information">
                    <div className="box" >
                        <h2 className="title is-3">Personal Information</h2>
                        <p>If you are changing your personal information, please make sure it is the same as the legal informtaion associated with your bank account.</p>
                        <div id="name">
                        <Name/>
                        </div>
                        <div id="phone-number">
                        <PhoneNumber/>
                        </div>
                        <div id="location">
                        <Location/>
                        </div>
                        <div id="email">
                        <Email/>
                        </div>
                    </div>
                    <div id="edit-password">
                    <div className="box">
                    <Password/>
                    </div>
                    </div>
                    <div id="edit-photo">
                    <div className="box" >
                    <AddImage/>
                    </div>
                    </div>
                    <div id="edit-bank-informaion">
                    <div className="box" >
                    <h2  className="title is-3">Content Checklist</h2>
                    <p>Sed ac pulvinar ex. Nullam eget justo ac tellus eleifend interdum. Ut gravida lorem semper leo hendrerit, vitae volutpat sapien maximus. Nam urna enim, pretium quis tincidunt at, ornare sit amet ligula. Nulla sodales, justo et ultrices porta, nisl magna congue sapien, sit amet commodo libero turpis sit amet ex. Donec molestie tristique lorem non scelerisque. Donec rutrum ex ac mauris dignissim, non posuere nisl bibendum. Praesent ornare justo id lectus vulputate fermentum. Praesent efficitur nec velit sed viverra. Pellentesque et magna urna. Praesent at diam vestibulum, semper tortor ac, ultricies nulla. Nulla sollicitudin tortor a sem facilisis lobortis. Morbi in eros metus. Donec quis dolor nulla.</p>
                    </div>   
                    </div>     
                </div>
    )
}

export default EditSettings