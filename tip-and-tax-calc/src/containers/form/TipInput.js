import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../../redux/actions/formActions';
import TipInputComponent from '../../components/TipTaxForm/TipInput';

const TipInput = (props) => {
	const handleTipChange = (event) => {
		const value = event.target.value;
		props.dispatch(formActions.editTip(value));
	};

	return <TipInputComponent value={props.tip} onChange={handleTipChange} />;
};

function mapStateToProps(state) {
	return {
		tip: state.tip
	};
}

export default connect(mapStateToProps)(TipInput);
