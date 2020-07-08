import React, { Component } from 'react';
import './App.css';
import TipTax from './containers/TipAndTaxCalculator';
import TipTaxForm from './containers/TipTaxForm/TipTaxForm';

class App extends Component {
	state = {
		subtotal: 0,
		state: null,
		jurisdiction: null,
		percentTip: 0
	};

	render() {
		return (
			<div className='App'>
				<TipTaxForm />
			</div>
		);
	}
}

export default App;
