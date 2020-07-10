import React from 'react';
import { connect } from 'react-redux';
import MockReceiptComponent from '../components/MockReceipt/MockReceipt';

const MockReceipt = (props) => {
	return <MockReceiptComponent subtotal={props.subtotal} tip={props.tip} />;
};

function mapStateToProps(state) {
	return {
		subtotal: state.subtotal,
		tip: state.tip
	};
}

export default connect(mapStateToProps)(MockReceipt);
