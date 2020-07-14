import React from 'react';

import Container from '@material-ui/core/Container';

import TipTaxForm from '../../containers/form/TipTaxForm';
import MockReceipt from '../../containers/MockReceipt';

import './TipTax.scss';
import Grid from '@material-ui/core/Grid';

const TipTax = () => {
	return (
		<Container maxWidth="sm" disableGutters s>
			<Grid container className="tiptax">
				<Grid item xs={12} className="title">
					<h1>Tip and tax calculator</h1>
				</Grid>
				<Grid item xs={5} className="content">
					<TipTaxForm />
				</Grid>
				<Grid item xs={1} className="spacing" />
				<Grid item xs={6} className="content">
					<MockReceipt />
				</Grid>
			</Grid>
		</Container>
	);
};

export default TipTax;
