import React from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import './design/AdminSummary.css';


const AdminSummary = () => {
    return (
        <>
            <NavBarAdmin />
            <div className="outerTile ">
                <div className="is-clearfix columns is-centered is-multiline">
                <p className="title" id="admin_title">Shoestring Summary</p>
                    <div className="tile is-11 container column is-fluid" id="section1">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-6">
                                <article className="tile is-child box">
                                    <p className="title"><a href="/transaction-history" rel="noopener noreferrer" className="pageLinks">Transactions</a></p>
                                    <p className="subtitle">All transactions through Shoestring</p>
                                    <div className="content">
                                        <p></p>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-6">
                                <article className="tile is-child box">
                                    <p className="title"><a href="/all-users" rel="noopener noreferrer" className="pageLinks">Users</a></p>
                                    <p className="subtitle">All Shoestring users </p>
                                    <div className="content">
                                        <p></p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-11 container column is-fluid" id="section2">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-6">
                                <article className="tile is-child box">
                                    <p className="title"><a href="/new-users-last-month" rel="noopener noreferrer" className="pageLinks">New Users</a></p>
                                    <p className="subtitle">All Shoestring users within the last month</p>
                                    <div className="content">
                                        <p></p>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-6">
                                <article className="tile is-child box">
                                    <p className="title"><a href="/new-users-last-month" rel="noopener noreferrer" className="pageLinks">Income</a></p>
                                    <p className="subtitle">Incoming profits</p>
                                    <div className="content">
                                        <p></p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminSummary;
