import React from 'react';
import STATE_TAXES from '../constants/StateTaxes';

const TipAndTaxCalculator = (props) => {
	const testTaxes = getStateAndJurisdictionTaxRate('New York', 'New York City');

	return (
		<div>
			<p>state tax: {testTaxes.stateTaxRate}</p>
			<p>local tax: {testTaxes.jurisdictionTaxRate}</p>
		</div>
	);
};

// passed in state MUST be valid
const getStateAndJurisdictionTaxRate = (state, jurisdiction) => {
	const taxRates = {
		stateTaxRate: 0,
		jurisdictionTaxRate: null
	};

	// checks if jurisdiction is used
	if (jurisdiction) {
		taxRates.stateTaxRate = STATE_TAXES[state]['statewide'];
		taxRates.jurisdictionTaxRate = STATE_TAXES[state][jurisdiction];
	} else {
		taxRates.stateTaxRate = STATE_TAXES[state];
	}

	return taxRates;
};

export default TipAndTaxCalculator;
