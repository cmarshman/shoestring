import React from 'react';
import Navbar from './../components/navbar';
import Footer from './../components/footer';
import ContactForm from '../components/contactForm';

function Contact() {
    return (
        <>
            <Navbar />
            <ContactForm/>
            <Footer />
        </>
    );
}

export default Contact;