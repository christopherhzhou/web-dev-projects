import React from 'react';

import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

import './SubtotalInput.scss';

export const NumberFormatCustom = (props) => {
	const { inputRef, onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value
					}
				});
			}}
			allowNegative={false}
			decimalScale={2}
			isNumericString
		/>
	);
};

const SubtotalInput = (props) => {
	return (
		<TextField
			label='Subtotal'
			className='subtotal'
			value={props.value}
			variant='outlined'
			size='small'
			onChange={props.onChange}
			InputProps={{
				inputComponent: NumberFormatCustom
			}}
		/>
	);
};

export default SubtotalInput;
