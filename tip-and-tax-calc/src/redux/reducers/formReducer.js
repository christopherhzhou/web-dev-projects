export default function formReducer(state = {}, action) {
	switch (action.type) {
		case 'EDIT_SUBTOTAL':
			return { ...state, subtotal: action.subtotal };
		default:
			return state;
	}
}
