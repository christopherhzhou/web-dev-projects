const STATE_TAXES = {
	//https://azdor.gov/sites/default/files/media/TPT_RATETABLE_08012020.pdf
	'Arizona': {
		statewide: 5.6,
		'Apache': 0.5,
		'Cochise': 0.5,
		'Coconino': 1.3,
		'Gila': 1,
		'Graham': 1,
		'Greenlee': 0.5,
		'La Paz': 2,
		'Maricopa': 0.7,
		'Mohave': 0,
		'Navajo': 0.83,
		'Pima': 0.5,
		'Pinal': 1.6,
		'Santa Cruz': 1,
		'Yavapai': 0.75,
		'Yuma': 1.112
	},

	'California': {
		statewide: 7.25,
		'Los Angeles': 2.25,
		'Orange County': 0.5
	},

	'Florida': {
		statewide: 6
	},

	'Maryland': 6,
	'Massachusetts': 6.25,
	'New Jersey': 6.625,

	'New York': {
		statewide: 4,
		'Albany': 4,
		'Allegany': 4.5,
		'Bronx': 4.875,
		'Broome': 4,
		'Cattaraugus': 4,
		'Cayuga': 4,
		'Chautauqua': 4,
		'Chemung': 4,
		'Chenango': 4,
		'Clinton': 4,
		'Columbia': 4,
		'Cortland': 4,
		'Delaware': 4,
		'Dutchess': 4.125,
		'Erie': 4.75,
		'Essex': 4,
		'Franklin': 4,
		'Fulton': 4,
		'Genesee': 4,
		'Greene': 4,
		'Hamilton': 4,
		'Herkimer': 4.25,
		'Jefferson': 4,
		'Brooklyn': 4.875,
		'Lewis': 4,
		'Livingston': 4,
		'Madison': 4,
		'Monroe': 4,
		'Montgomery': 4,
		'Nassau': 4.625,
		'New York City': 4.875,
		'Niagara': 4,
		'Oneida': 4.75,
		'Onondaga': 4,
		'Ontario': 3.5,
		'Orange': 4.125,
		'Orleans': 4,
		'Oswego': 4,
		'Otsego': 4,
		'Putnam': 4.375,
		'Rensselaer': 4,
		'Rockland': 4.375,
		'Saratoga': 3,
		'Schenectady': 4,
		'Schoharie': 4,
		'Schuyler': 4,
		'Seneca': 4,
		'St. Lawrence': 4,
		'Staten Island': 4.875,
		'Steuben': 4,
		'Suffolk': 4.625,
		'Sullivan': 4,
		'Tioga': 4,
		'Tompkins': 4,
		'Ulster': 4,
		'Warren': 3,
		'Washington': 3,
		'Wayne': 4,
		'Westchester': 4.375,
		'Wyoming': 4,
		'Yates': 4
	},

	'Texas': {
		statewide: 6.25
	},

	'Washington': {
		statewide: 6.5,
		'Seattle': 3.6
	},

	'Washington, D.C.': 10
};

export default STATE_TAXES;
