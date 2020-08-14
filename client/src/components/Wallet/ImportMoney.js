import React from "react";

function ImportMoney() {
  return (
    <>
      <div className="box">
        <p className="subtitle has-text-centered">Add money to my wallet</p>
        <p>Enter the amount you would like to deposit into your bank account</p>
        <p className="control has-icons-left">
          <input className="input" type="text" name="name" placeholder="$50" />
          <span className="icon is-small is-left">
            <i className="fas fa-money-bill-wave-alt"></i>
          </span>
        </p>
        <a className="button is-light" id="foundme">
          Add Money
        </a>
      </div>
    </>
  );
}

export default ImportMoney;
