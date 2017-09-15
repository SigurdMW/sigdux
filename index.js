// https://github.com/reactjs/redux/blob/master/src/createStore.js

// TODO: default values in reducers? right now they must be passed to the store on init
// TODO: how to combine reducers?
// TODO: subscribe to only a part of the state?
// TODO: allow async reducers? with async/await or promises

// subscribe to certain parts of the store
// pass a callback to run AFTER the reducer-part
//   CONS: must compare current and previous state part

function reducer(action, data, state){
	switch(action){
		case "SET_USERNAME":
			return Object.assign({}, state, {user: data});
		case "INCREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count + 1});
		case "DECREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count - 1});
		default:
			return data;
	}
}

// Initial store data
const initialState = {
	user: null,
	count: 0
};

// Setup store
const anotherStore = new Sigdux(reducer, initialState);
