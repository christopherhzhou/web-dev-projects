import React from 'react';

const mockReceipt = (props) => {
	return (
		<div>
			<p>tiptax.xyz</p>
			<p>Subtotal: {props.subtotal}</p>
			<p>Tip: {props.tip}</p>
			<p>Tax: {props.tax}</p>
			<p>Total: {props.total}</p>
		</div>
	);
};

export default mockReceipt;
