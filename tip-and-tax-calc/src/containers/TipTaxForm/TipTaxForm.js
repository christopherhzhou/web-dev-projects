import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import JurisdictionInput from '../../components/TipTaxForm/JurisdictionInput';
import StateInput from '../../components/TipTaxForm/StateInput/StateInput';
import SubtotalInput from '../../components/TipTaxForm/SubtotalInput/SubtotalInput';
import TipInput from '../../components/TipTaxForm/TipInput';

import './TipTaxForm.scss';

const TipTaxForm = (props) => {
	const jurisdictionInput = null;

	return (
		<div className="tipTaxForm">
			<Grid container spacing={2} direction="column">
				<Grid item>
					<SubtotalInput />
				</Grid>
				<Grid item>
					<StateInput value={props.value} onChange={props.onChange} />
				</Grid>
				<Grid item>{jurisdictionInput}</Grid>
				<Grid item>
					<TipInput />
				</Grid>
			</Grid>
		</div>
	);
};

export default TipTaxForm;
