import React from 'react';
import './style.css';

function WalletTransfer() {
    return (
        <section>
            <div className="tile is-ancestor columns">
                <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                    <p className="subtitle has-text-centered">
                        Add money to my wallet
                    </p>
                    <p>Enter the amount you would like to deposit into your bank account</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <a className="button is-light" id="foundme">Add Money</a>

                </div>

                <div className="tile is-vertical is-clearfix column is-two-fifths banana box" id="tile2">
                    <p className="subtitle has-text-centered">
                        Deposit money to my bank account
                    </p>
                    <p>Enter the amount you would like to deposit into your bank account</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <a className="button is-light" id="foundme">Deposit Money</a>

                </div>
            </div>    
            </section>
    );
}

export default WalletTransfer;