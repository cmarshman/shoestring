import React from 'react';
import NavBarAuth from '../components/NavBarAuth';
import Currency from '../components/CurrencyConverter';
import './design/CurrencyConverter.css';

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
                                <p class="subtitle is-4">Not everyone knows currency abbreviations, this cheat sheet provides the most common currencies in the world for our converter. Make sure to use the abbreviated name for the converter.</p>
                                <ol type="1" id="redHat">
                                    <li>    AUD = Australian Dollar</li><li>    HKD = Hong Kong Dollar Dollar</li>
                                    <li>    EUR = European Dollar</li> <li>    ISK = Icelandic Króna</li>
                                    <li>    CHF = Swiss Franc</li> <li>    PHP = Philippine Peso</li>
                                    <li>    CNY = Chinese Yuan</li> <li>    DKK = Danish Krone</li>
                                    <li>    GBP = British Pound</li> <li>    HUF = Hungarian Forint</li>
                                    <li>    JPY = Japanese Yuan</li> <li>    CZK = Czech Republic Koruna</li>
                                    <li>    CAD = Canadian Dollar</li> <li>    RON = Romanian Leu</li>
                                    <li>    USD = US Dollar</li> <li>    SEK = Swedish Krona</li>



                                    <li>    IDR = Indonesian Rupiah</li> <li>    INR = Indian Rupee</li>
                                    <li>    BRL = Brazilian Real</li> <li>    RUB = Russian Ruble</li>
                                    <li>    HRK = Croatian Kuna</li> <li>    THB = Thai Baht</li>
                                    <li>    SGD = Singapore Dollar</li> <li>    PLN = Polish Zloty</li>
                                    <li>    BGN = Bulgarian Lev</li> <li>    TRY = Turkish Lira</li>
                                    <li>    NOK = Norwegian Krone</li> <li>    NZD = New Zealand Dollar</li>
                                    <li>    ZAR = South African Rand</li> <li>    MXN = Mexican Peso</li>
                                    <li>    ILS = Israeli New Sheqel</li>
                                    <li>    KRW = Kuwaiti Dinar</li>
                                    <li>    MYR = Malaysian Ringgit</li>

                                </ol>
                            </div>
                        </div>
                        <div className="tile is-child box">
                            <br />
                            <p className="title">Currency Converter</p>
                            <br>
                            </br>
                            <div className="field">
                                <Currency />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CurrencyConverter;