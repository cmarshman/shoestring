import React from 'react';
import Navbar from './../components/navbar';

function Landing() {
    return (
        <div>
            <Navbar />

            <div className="tile is-ancestor">
                <div className="tile is vertical is-10 is-clearfix columns">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="column is-three-fifths">
                                <p className="title" id="username">JT Turner</p>
                                <p className="subtitle">No</p>
                            </article>
                            <article className="column is-full">
                                <p className="title">What</p>
                                <p className="subtitle">Uou</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default Landing;