export default function formReducer(state = {}, action) {
	switch (action.type) {
		case 'EDIT_SUBTOTAL':
			return { ...state, subtotal: action.subtotal };
		case 'EDIT_STATE':
			return { ...state, userState: action.state };
		case 'EDIT_JURISDICTION':
			return { ...state, jurisdiction: action.jurisdiction };
		case 'EDIT_TIP':
			return { ...state, tip: action.tip };
		default:
			return state;
	}
}
