import React from 'react';
import JT from '../../images/Team/JT.png';
import './style.css';

function WalletProfileCard() {
    return(
        <section className="hero is-medium" id="wallet">
            <div className="hero-body"> 
                <div className="container has-text-centered">
                    <a className="title" href=''>
                        <img src={JT} alt="JT Turner"/>
                    </a>
                    <h1 className="title">
                        JT Turner
                    </h1>
                    <h2 className="subtitle">
                        Funds Available: $100 <br/>
                        Member Since: April 2020
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default WalletProfileCard;