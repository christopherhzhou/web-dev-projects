import React from 'react';
//{ useState }

import JurisdictionInput from '../../components/TipTaxForm/JurisdictionInput';
import StateInput from '../../components/TipTaxForm/StateInput';
import SubtotalInput from '../../components/TipTaxForm/SubtotalInput/SubtotalInput';
import TipInput from '../../components/TipTaxForm/TipInput';

import './TipTaxForm.scss';

const TipTaxForm = (props) => {
	//const [value, setValue] = useState(0);

	return (
		<div>
			<SubtotalInput />
			<StateInput />

			{/*conditionally render jurisdiction dropdown here:*/}
			<JurisdictionInput />

			<TipInput />
		</div>
	);
};

export default TipTaxForm;
