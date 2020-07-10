import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../../redux/actions/formActions';
import SubtotalInputComponent from '../../components/TipTaxForm/SubtotalInput/SubtotalInput';

const SubtotalInput = (props) => {
	const handleSubtotalChange = (event) => {
		const value = event.target.value;
		props.dispatch(formActions.editSubtotal(value));
	};

	return (
		<SubtotalInputComponent
			onChange={handleSubtotalChange}
			value={props.subtotal}
		/>
	);
};

function mapStateToProps(state) {
	return {
		subtotal: state.subtotal
	};
}

export default connect(mapStateToProps)(SubtotalInput);
