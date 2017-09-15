// https://github.com/reactjs/redux/blob/master/src/createStore.js

// TODO: default values in reducers? right now they must be passed to the store on init
// TODO: how to combine reducers?
// TODO: subscribe to only a part of the state?
// TODO: allow async reducers? with async/await or promises

// Consider time travel..?

// Consider deepEqual in state computation:
// https://github.com/lodash/lodash/
// https://github.com/substack/node-deep-equal

// Optimize renderings:
// 1. update state only when state changes.

class Sigdux {
	constructor(reducer, defaultStore){
		this.state = defaultStore || {};
		this.subscribers = [];
	}

	getState(){
		return this.state;
	}

	updateState(newState){
		const state = Object.assign({}, newState);

		// fast and simple comparison - will not work with
		// functions and DOM elements in obj
		// Order of keys in obj matter
		if(JSON.stringify(this.state) !== JSON.stringify(state)){
			this.state = state;
			this.updateSubscribers();
		}
	}

	addReducer(action, data){
		this.updateState(reducer(action, data, this.state));
	}

	dispatch(action, data){
		this.addReducer(action, data);
	}

	addSubscriber(func){
		if(typeof func !== "function"){
			throw new Error("Subscriber must be a function");
		}
		this.subscribers.push(func);

		// To set initial value
		this.updateSubscribers();
	}

	updateSubscribers(){
		this.subscribers.map(subscriber => {
			subscriber(this.state);
		});
	}
}
