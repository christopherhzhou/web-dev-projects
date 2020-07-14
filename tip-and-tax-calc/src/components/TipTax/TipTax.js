import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TipTaxForm from '../../containers/form/TipTaxForm';
import MockReceipt from '../../containers/MockReceipt';

import './TipTax.scss';

const TipTax = () => {
	return (
		<Container maxWidth='sm' disableGutters className='container'>
			<Grid container className='tiptax'>
				<Grid item xs={12}>
					<h1>Tip and tax calculator</h1>
				</Grid>
				<Grid item xs={4}>
					<TipTaxForm />
				</Grid>
				<Grid item xs={8} className='mockReceipt'>
					<MockReceipt />
				</Grid>
			</Grid>
		</Container>
	);
};

export default TipTax;
