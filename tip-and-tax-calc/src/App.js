import React, { Component } from 'react';

import TipTax from './components/TipTax/TipTax';

import './App.scss';

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
				<TipTax />
			</div>
		);
	}
}

export default App;
