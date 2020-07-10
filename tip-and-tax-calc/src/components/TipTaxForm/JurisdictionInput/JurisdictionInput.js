import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './JurisdictionInput.scss';

// props: jurisdictions (array), value, onChange
const JurisdictionInput = (props) => {
	const jurisdictionList = props.jurisdictions.map((jurisdiction) => (
		<MenuItem value={jurisdiction} key={jurisdiction}>
			{jurisdiction}
		</MenuItem>
	));

	return (
		<FormControl className="jurisdictionInput" variant="outlined" size="small">
			<InputLabel>Jurisdiction</InputLabel>
			<Select
				value={props.value}
				onChange={props.onChange}
				label="Jurisdiction"
			>
				{jurisdictionList}
			</Select>
		</FormControl>
	);
};

export default JurisdictionInput;
