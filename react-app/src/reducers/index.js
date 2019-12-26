const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_RESTAURANTS':
			return { ...state, loading: true };
		case 'RESTAURANTS_RECEIVED':
			return { ...state, restaurants: action.payload, loading: false };
		default:
			return state;
	}
};
export default reducer;
