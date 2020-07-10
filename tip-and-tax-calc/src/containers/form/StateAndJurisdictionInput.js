import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../../redux/actions/formActions';
import Grid from '@material-ui/core/Grid';
import JurisdictionInputComponent from '../../components/TipTaxForm/JurisdictionInput/JurisdictionInput';
import StateInputComponent from '../../components/TipTaxForm/StateInput/StateInput';
import STATE_TAXES from '../../constants/StateTaxes';

const StateAndJurisdictionInput = (props) => {
	const handleStateChange = (event) => {
		const newState = event.target.value;
		props.dispatch(formActions.editState(newState));
		props.dispatch(formActions.editJurisdiction(''));
		if (hasJurisdictionTax(newState) !== props.requireJurisdiction) {
			console.log(newState, hasJurisdictionTax(newState));
			props.dispatch(
				formActions.editHasJurisdictionTax(hasJurisdictionTax(newState))
			);
		}
	};

	const handleJurisdictionChange = (event) => {
		const jurisdiction = event.target.value;
		props.dispatch(formActions.editJurisdiction(jurisdiction));
	};

	let jurisdictionQuestion = null;

	if (hasJurisdictionTax(props.userState)) {
		const jurisdictions = Object.keys(STATE_TAXES[props.userState]);
		const index = jurisdictions.indexOf('statewide');
		jurisdictions.splice(index, 1);
		jurisdictionQuestion = (
			<Grid item>
				<JurisdictionInputComponent
					jurisdictions={jurisdictions}
					value={props.jurisdiction}
					onChange={handleJurisdictionChange}
				/>
			</Grid>
		);
	}

	return (
		<Grid container spacing={1}>
			<Grid item>
				<StateInputComponent
					states={Object.keys(STATE_TAXES)}
					value={props.userState}
					onChange={handleStateChange}
				/>
			</Grid>
			{jurisdictionQuestion}
		</Grid>
	);
};

const hasJurisdictionTax = (state) => {
	return typeof STATE_TAXES[state] === 'object';
};

function mapStateToProps(state) {
	return {
		userState: state.userState,
		requireJurisdiction: state.requireJurisdiction,
		jurisdiction: state.jurisdiction,
	};
}

export default connect(mapStateToProps)(StateAndJurisdictionInput);
