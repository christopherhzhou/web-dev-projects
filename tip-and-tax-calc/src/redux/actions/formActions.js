export function editSubtotal(subtotal) {
	return { type: 'EDIT_SUBTOTAL', subtotal: subtotal };
}

export function editState(state) {
	return { type: 'EDIT_STATE', state: state };
}

export function editJurisdiction(jurisdiction) {
	return { type: 'EDIT_JURISDICTION', jurisdiction: jurisdiction };
}

export function editTip(tip) {
	return { type: 'EDIT_TIP', tip: tip };
}
