import React, { useState } from 'react';
//import STATE_TAXES from '../../constants/StateTaxes';

const TipTaxForm = (props) => {
	const [value, setValue] = useState(0);
	return (
		<div>
			<form>
				<label>Subtotal </label>
				<input
					type='number'
					name='subtotal'
					onChange={(event) => setValue(event.target.value)}
					value={value}
				/>
			</form>
			<p>subtotal: {value}</p>
		</div>
	);
};

export default TipTaxForm;
