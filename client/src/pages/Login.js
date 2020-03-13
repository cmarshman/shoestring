import React from 'react';

import Navbar from './../components/navbar';
import Footer from './../components/footer';
import LoginForm from '../components/loginForm/loginForm';


function Login(){
    return (
        <>
        <Navbar />
        <LoginForm />
        <Footer/>
        </>
    );
}

export default Login;