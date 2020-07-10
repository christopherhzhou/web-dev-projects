import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import STATE_TAXES from '../../../constants/StateTaxes';
import './StateInput.scss';

const StateInput = (props) => {
	const stateList = Object.keys(STATE_TAXES).map((state) => (
		<MenuItem value={state} key={state}>
			{state}
		</MenuItem>
	));

	return (
		<FormControl className='stateInput' variant='outlined' size='small'>
			<InputLabel>State</InputLabel>
			<Select value={props.value} onChange={props.onChange} label='State'>
				{stateList}
			</Select>
		</FormControl>
	);
};

export default StateInput;
