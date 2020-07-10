import React from 'react';

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
		<div>
			<p>Subtotal: {props.subtotal}</p>
			<p>Tip: {props.tip}</p>
			{taxes}
			<p>Total: {props.total}</p>
		</div>
	);
};

export default mockReceipt;
