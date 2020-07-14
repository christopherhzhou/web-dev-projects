import React from 'react';
import Paper from '@material-ui/core/Paper';
import EmptyWrapper from '../../util/EmptyWrapper';

import './MockReceipt.scss';

const mockReceipt = (props) => {
	let taxes, stateTaxPercentage;

	if (props.stateTaxRate) {
		stateTaxPercentage = <EmptyWrapper> ({props.stateTaxRate}%)</EmptyWrapper>;
	}

	if (props.hasJurisdictionTax) {
		const jurisdictionTaxPercentage = props.jurisdictionTaxRate ? (
			<EmptyWrapper> ({props.jurisdictionTaxRate}%)</EmptyWrapper>
		) : null;

		taxes = [
			<tr>
				<td>State Tax{stateTaxPercentage}</td>
				<td className='price'>${props.stateTax}</td>
			</tr>,
			<tr>
				<td>Jurisdiction Tax{jurisdictionTaxPercentage}</td>
				<td className='price'>${props.jurisdictionTax}</td>
			</tr>
		];
	} else {
		taxes = (
			<tr>
				<td>Sales Tax{stateTaxPercentage}</td>
				<td className='price'>${props.stateTax}</td>
			</tr>
		);
	}

	return (
		<Paper elevation={3} square className='mockReceiptComponent'>
			<table>
				<tr>
					<td>Sub Total</td>
					<td className='price'>${props.subtotal}</td>
				</tr>
				{taxes}
			</table>
			-----------------------------------
			<table>
				<tr>
					<td>Tip</td>
					<td className='price'>${props.tip}</td>
				</tr>
			</table>
			===================================
			<table>
				<tr>
					<th className='total'>Grand Total</th>
					<th className='totalPrice'>${props.total}</th>
				</tr>
			</table>
		</Paper>
	);
};

export default mockReceipt;
