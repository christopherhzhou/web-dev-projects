import React from 'react';

import { NumberFormatCustom } from '../../TipTaxForm/SubtotalInput/SubtotalInput';
import TextField from '@material-ui/core/TextField';

import './TipInput.scss';

const TipInput = (props) => {
	return (
		<TextField
			label="Tip"
			className="tipInput"
			value={props.value}
			variant="outlined"
			size="small"
			onChange={props.onChange}
			InputProps={{
				inputComponent: NumberFormatCustom,
			}}
		/>
	);
};

export default TipInput;
