import React from 'react';
import Name from '../PersonalInfo/Name';
import PhoneNumber from '../PersonalInfo/PhoneNumber';
import Location from '../PersonalInfo/Location';
import Email from '../PersonalInfo/Email';
import Password from '../PersonalInfo/Password';
import AddImage from '../AddImage';
// import BankInformation from '../PersonalInfo/BankInformation';

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
                    {/* <BankInformation/> */}
                    </div>     
                </div>
    )
}

export default EditSettings