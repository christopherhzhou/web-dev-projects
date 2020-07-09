import React from 'react';

import Container from '@material-ui/core/Container';

import TipTaxForm from '../../containers/TipTaxForm/TipTaxForm';
import MockReceipt from '../MockReceipt/MockReceipt';

import './TipTax.scss';

const TipTax = () => {
	return (
		<Container maxWidth='sm' disableGutters className='tiptax'>
			<h1 className='title'>Tip and tax calculator</h1>
			<Container>
				<TipTaxForm />
				<MockReceipt />
			</Container>
		</Container>
	);
};

export default TipTax;
