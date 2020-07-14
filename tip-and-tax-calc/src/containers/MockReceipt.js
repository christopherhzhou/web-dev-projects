import React from 'react';
import { connect } from 'react-redux';
import MockReceiptComponent from '../components/MockReceipt/MockReceipt';
import STATE_TAXES from '../constants/StateTaxes';

const MockReceipt = (props) => {
	const taxRates = getStateAndJurisdictionTaxRate(
		props.userState,
		props.hasJurisdictionTax,
		props.jurisdiction
	);

	const ZERO = 0;
	const ZERO_MONEY = ZERO.toFixed(2);

	const subtotal = props.subtotal
		? parseFloat(props.subtotal).toFixed(2)
		: ZERO_MONEY;

	const tipValue =
		props.tip && props.subtotal
			? (props.tip * props.subtotal * 0.01).toFixed(2)
			: ZERO_MONEY;

	const stateTax =
		taxRates.stateTaxRate && props.subtotal
			? (props.subtotal * taxRates.stateTaxRate * 0.01).toFixed(2)
			: ZERO_MONEY;

	const jurisdictionTax =
		taxRates.jurisdictionTaxRate && props.subtotal
			? (props.subtotal * taxRates.jurisdictionTaxRate * 0.01).toFixed(2)
			: ZERO_MONEY;

	const total = (
		parseFloat(subtotal) +
		parseFloat(tipValue) +
		parseFloat(stateTax) +
		parseFloat(jurisdictionTax)
	).toFixed(2);

	return (
		<MockReceiptComponent
			subtotal={subtotal}
			tip={tipValue}
			hasJurisdictionTax={props.hasJurisdictionTax}
			stateTax={stateTax}
			stateTaxRate={taxRates.stateTaxRate}
			jurisdictionTax={jurisdictionTax}
			jurisdictionTaxRate={taxRates.jurisdictionTaxRate}
			total={total}
		/>
	);
};

const getStateAndJurisdictionTaxRate = (
	state,
	hasJurisdictionTax,
	jurisdiction
) => {
	const taxRates = {
		stateTaxRate: 0,
		jurisdictionTaxRate: null
	};

	if (hasJurisdictionTax) {
		taxRates.stateTaxRate = STATE_TAXES[state].statewide;
		taxRates.jurisdictionTaxRate = STATE_TAXES[state][jurisdiction];
	} else {
		taxRates.stateTaxRate = STATE_TAXES[state];
	}

	return taxRates;
};

function mapStateToProps(state) {
	return {
		subtotal: state.subtotal,
		tip: state.tip,
		userState: state.userState,
		jurisdiction: state.jurisdiction,
		hasJurisdictionTax: state.requireJurisdiction
	};
}

export default connect(mapStateToProps)(MockReceipt);
