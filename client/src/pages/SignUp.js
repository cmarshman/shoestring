import React from 'react';

import Navbar from './../components/navbar';
import Footer from './../components/footer';
import SignupForm from '../components/signupForm/signupForm';

function SignUp(){
    return (
        <>
        <Navbar />
        <Footer/>
        <SignupForm/>
        </>
    );
}

export default SignUp;