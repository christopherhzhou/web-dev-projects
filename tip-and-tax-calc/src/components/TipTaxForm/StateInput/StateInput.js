import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './StateInput.scss';

// props: states (array), value, onChange
const StateInput = (props) => {
	const stateList = props.states.map((state) => (
		<MenuItem value={state} key={state}>
			{state}
		</MenuItem>
	));

	return (
		<FormControl className="stateInput" variant="outlined" size="small">
			<InputLabel>State</InputLabel>
			<Select value={props.value} onChange={props.onChange} label="State">
				{stateList}
			</Select>
		</FormControl>
	);
};

export default StateInput;
