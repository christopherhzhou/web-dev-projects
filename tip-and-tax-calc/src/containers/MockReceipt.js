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

	const subtotal = props.subtotal ? parseInt(props.subtotal) : 0;

	const tipValue =
		props.tip && props.subtotal
			? Math.round(props.tip * props.subtotal) * 0.01
			: 0;

	const stateTax =
		taxRates.stateTaxRate && props.subtotal
			? Math.round(props.subtotal * taxRates.stateTaxRate) * 0.01
			: 0;
	const jurisdictionTax =
		taxRates.jurisdictionTaxRate && props.subtotal
			? Math.round(props.subtotal * taxRates.jurisdictionTaxRate) * 0.01
			: 0;

	const total = subtotal + tipValue + stateTax + jurisdictionTax;

	return (
		<MockReceiptComponent
			subtotal={subtotal}
			tip={tipValue}
			hasJurisdictionTax={props.hasJurisdictionTax}
			stateTax={stateTax}
			jurisdictionTax={jurisdictionTax}
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
		jurisdictionTaxRate: null,
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
		hasJurisdictionTax: state.requireJurisdiction,
	};
}

export default connect(mapStateToProps)(MockReceipt);
