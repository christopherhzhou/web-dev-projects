import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const NumberFormatCustom = (props) => {
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
			prefix="$"
		/>
	);
};

const SubtotalInput = (props) => {
	const [values, setValues] = React.useState({
		numberformat: '',
	});
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<TextField
			value={values.amount}
			onChange={handleChange}
			startAdornment={<InputAdornment position="start">$</InputAdornment>}
			InputProps={{
				inputComponent: NumberFormatCustom,
			}}
		/>
	);
};

export default SubtotalInput;
