import React, { useState } from 'react';

import { NumberFormatCustom } from '../TipTaxForm/SubtotalInput/SubtotalInput';

import TextField from '@material-ui/core/TextField';

const TipInput = (props) => {
	const [amount, setAmount] = useState();

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	return (
		<TextField
			label="Tip"
			className="tip"
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

export default TipInput;
