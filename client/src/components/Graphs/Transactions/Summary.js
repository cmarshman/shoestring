import React from 'react';
import './style.css';
import HelmetChanges from "./HelmetChanges";

const SummaryGraph = () => {
    return(
        <>
        <HelmetChanges/>
        <div className="graphs-container" data-title="">
			<div className="data-container column is-full columns is-mobile is-size-7 has-text-dark is-marginless">
				<div data-title="One" data-value="10"></div>
				<div data-title="Two" data-value="50"></div>
				<div data-title="Three" data-value="100"></div>
				<div data-title="Four" data-value="55"></div>
				<div data-title="Five" data-value="25"></div>
				<div data-title="Six" data-value="88"></div>
				<div data-title="Seven" data-value="77"></div>
				<div data-title="Eight" data-value="66"></div>
				<div data-title="Nine" data-value="9"></div>
				<div data-title="Ten" data-value="10"></div>
				<div data-title="Eleven" data-value="11"></div>
				<div data-title="Twelve" data-value="12"></div>
			</div>
		</div>
        </>
    )
}

export default SummaryGraph