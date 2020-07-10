import { createStore } from 'react-redux';
import formReducer from './reducers/formReducer';

export default function configureStore(initialState) {
	return createStore(formReducer, initialState);
}
