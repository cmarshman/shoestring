import React from 'react';
import IssueForm from './../components/IssueForm'
import Navbar from './../components/navbar';
import Footer from './../components/footer';

function ReportAnIssue(){
    return (
        <>
        <Navbar />
        <IssueForm/>
        <Footer/>
        </>
    );
}

export default ReportAnIssue;