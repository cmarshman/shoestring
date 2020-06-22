import React from 'react';
import Apple from '../../images/apple_store.png';
import Google from '../../images/google_play.png';

function Playstore() {
    
    
    return (
        <>
            <div className="column is-one-fifth is-1">
            </div>
            <div className="column is-two-fifths">
                <a href="https://www.figma.com/proto/uqJHM2IyFmYsaFkPNux7YE/shoestring?node-id=8%3A23&scaling=scale-down" target="_blank" rel="noopener noreferrer">
                    <img id="playstore" src={Apple} alt="playstore"/>
                </a>
            </div>
            <div className="column is-two-fifths ">
                <a href="https://www.figma.com/proto/uqJHM2IyFmYsaFkPNux7YE/shoestring?node-id=8%3A23&scaling=scale-down" target="_blank" rel="noopener noreferrer">
                    <img id="playstore" src={Google} alt="playstore"/>
                </a>
            </div>
        </>
    );
}

export default Playstore;