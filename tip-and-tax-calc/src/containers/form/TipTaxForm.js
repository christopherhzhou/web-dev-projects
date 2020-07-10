import React from 'react';

import Grid from '@material-ui/core/Grid';

import StateAndJurisdictionInput from '../../containers/form/StateAndJurisdictionInput';
import SubtotalInput from '../../containers/form/SubtotalInput';
import TipInput from '../../containers/form/TipInput';

const TipTaxForm = () => {
	return (
		<div className="tipTaxForm">
			<Grid container spacing={3} direction="column">
				<Grid item>
					<SubtotalInput />
				</Grid>
				<Grid item>
					<TipInput />
				</Grid>
				<Grid item>
					<StateAndJurisdictionInput />
				</Grid>
			</Grid>
		</div>
	);
};

export default TipTaxForm;
