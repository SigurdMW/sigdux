function reducer(action, data, state){
	switch(action){
		case "SET_USERNAME":
			return Object.assign({}, state, {user: data});
		case "INCREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count + 1});
		case "DECREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count - 1});
		case "SET_COUNT":
			return Object.assign({}, state, {count: data});
		case "SET_USER":
			return Object.assign({}, state, {user: data});
		default:
			return state;
	}
}

// Initial store data
const initialState = {
	user: null,
	count: 0
};

// Setup store
const anotherStore = new Sigdux(reducer, initialState);
