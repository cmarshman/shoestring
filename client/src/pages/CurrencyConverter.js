import React from 'react';
import NavBarAuth from '../components/NavBarAuth';


function CurrencyConverter() {
    return (
        <>
            <NavBarAuth />
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid">
                        <div className="tile is-7 is-vertical is-parent">
                            <div className="tile is-child box">
                                <br />
                                <p className="title">Currency Cheat Sheet</p>
                                <br>
                                </br>
                                <p class="subtitle is-4">   Not everyone knows currency abbreviations, this cheat sheet provides the most common currencies in the world for our converter. Make sure to use the abbreviated name for the converter.</p>
                                <ol type="1">
                                    <li>    AUD = Australian Dollar</li>
                                    <li>    EUR = European Dollar</li>
                                    <li>    CHF = Swiss Franc</li>
                                    <li>    CNY = Chinese Yuan</li>
                                    <li>    GBP = British Pound</li>
                                    <li>    JPY = Japanese Yuan</li>
                                    <li>    CAD = Canadian Dollar</li>
                                    <li>    USD = US Dollar</li>
                                </ol>
                            </div>
                        </div>
                        <div className="tile is-child box">
                            <br />
                            <p className="title">Currency Converter</p>
                            <br>
                            </br>
                            <div className="field">
                                <label class="label">Amount</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="amount" value='' />
                                </p>
                                <label class="label">From</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="From" value='' />
                                </p>
                                <label class="label">To</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="To" value='' />
                                </p>
                                <br>
                                </br>
                                <p class="control">
                                    <a class="button is-primary">
                                        Submit
                                        </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrencyConverter;