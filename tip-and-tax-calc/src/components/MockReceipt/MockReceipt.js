import React from 'react';
import Paper from '@material-ui/core/Paper';

const mockReceipt = (props) => {
	//example receipt: https://i.pinimg.com/originals/72/48/a2/7248a2bd5714d39e515eb4539b01e5b3.png

	let taxes;

	if (props.hasJurisdictionTax) {
		taxes = (
			<div>
				<p>State tax: {props.stateTax}</p>
				<p>Jurisdiction tax: {props.jurisdictionTax}</p>
			</div>
		);
	} else {
		taxes = <p>Tax: {props.stateTax}</p>;
	}

	return (
		<Paper elevation={3} square>
			<p>Subtotal: {props.subtotal}</p>
			<p>Tip: {props.tip}</p>
			{taxes}
			<p>Total: {props.total}</p>
		</Paper>
	);
};

export default mockReceipt;
