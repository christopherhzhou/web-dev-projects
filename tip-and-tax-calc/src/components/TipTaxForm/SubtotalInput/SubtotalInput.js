import React, { useState } from 'react';

import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

import './SubtotalInput.scss';

// sets the currency format
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
						value: values.value,
					},
				});
			}}
			allowNegative={false}
			decimalScale={2}
			isNumericString
		/>
	);
};

const SubtotalInput = (props) => {
	const [amount, setAmount] = useState();

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	return (
		<TextField
			label="Subtotal"
			className="subtotal"
			value={amount}
			variant="outlined"
			size="small"
			onChange={handleChange}
			InputProps={{
				inputComponent: NumberFormatCustom,
			}}
		/>
	);
};

export default SubtotalInput;
