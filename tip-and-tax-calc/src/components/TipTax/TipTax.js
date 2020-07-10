import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import TipTaxForm from '../../containers/TipTaxForm/TipTaxForm';
import MockReceipt from '../MockReceipt/MockReceipt';

import './TipTax.scss';
import Grid from '@material-ui/core/Grid';

const TipTax = () => {
	const [values, setValues] = useState({
		subtotal: null,
		stateTax: null,
		jurisdictionTax: null,
		tip: null,
		total: null,
	});

	return (
		<Container maxWidth="sm" disableGutters>
			<Grid container className="tiptax">
				<Grid item xs={12} className="title">
					<h1>Tip and tax calculator</h1>
				</Grid>
				<Grid item xs={1} className="spacing" />
				<Grid item xs={4} className="content">
					<TipTaxForm
						subtotal={values.subtotal}
						stateTax={values.stateTax}
						jurisdictionTax={values.jurisdictionTax}
						tip={values.tip}
					/>
				</Grid>
				<Grid item xs={1} className="spacing" />
				<Grid item xs={5} className="content">
					<MockReceipt />
				</Grid>
				<Grid item xs={1} className="spacing" />
			</Grid>
		</Container>
	);
};

export default TipTax;
