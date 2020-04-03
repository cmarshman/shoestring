import React from 'react';

function Spinner() {
    return(
        <div className="outerTile">
            <div className="is-clearfix columns is-centered">
                <div className="tile is-10 container column is-fluid">
                    <div className="tile is-12 is-vertical is-parent" id="wallet">
                        <div className="tile is-child box has-text-centered">
                        <button className='button is-white is-large is-loading is-fullwidth'>Loading . . .</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spinner; 

                