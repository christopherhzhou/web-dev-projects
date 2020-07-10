import React from 'react';

import Grid from '@material-ui/core/Grid';

import StateInput from '../../components/TipTaxForm/StateInput/StateInput';
import SubtotalInput from '../../containers/form/SubtotalInput';
import TipInput from '../../containers/form/TipInput';

const TipTaxForm = () => {
	return (
		<div className='tipTaxForm'>
			<Grid container spacing={2} direction='column'>
				<Grid item>
					<SubtotalInput />
				</Grid>
				<Grid item>
					<TipInput />
				</Grid>
				<Grid item>
					<StateInput />
				</Grid>
			</Grid>
		</div>
	);
};

export default TipTaxForm;
