export function editSubtotal(subtotal) {
	return { type: 'EDIT_SUBTOTAL', subtotal };
}

export function editState(state) {
	return { type: 'EDIT_STATE', state };
}

export function editJurisdiction(jurisdiction) {
	return { type: 'EDIT_JURISDICTION', jurisdiction };
}

export function editTip(tip) {
	return { type: 'EDIT_TIP', tip };
}

export function editHasJurisdictionTax(hasJurisdictionTax) {
	return { type: 'REQUIRE_JURISDICTION', hasJurisdictionTax };
}
