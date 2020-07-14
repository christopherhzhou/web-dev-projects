import React from 'react';

import { NumberFormatCustom } from '../../TipTaxForm/SubtotalInput/SubtotalInput';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import './TipInput.scss';

const TipInput = (props) => {
	return (
		<TextField
			label='Tip'
			className='tipInput'
			variant='outlined'
			size='small'
			value={props.value}
			onChange={props.onChange}
			InputProps={{
				endAdornment: <InputAdornment position='end'>%</InputAdornment>,
				inputComponent: NumberFormatCustom
			}}
		/>
	);
};

export default TipInput;
