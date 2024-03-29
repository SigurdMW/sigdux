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
		this.previousState = {};
		this.subscribers = [];
		this.reducer = reducer;
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
			this.previousState = this.state;
			this.state = state;
			this.updateSubscribers();
		}
	}

	addReducer(action, data){
		if(typeof this.reducer === "function"){
			this.updateState(this.reducer(action, data, this.state));
		} else if(typeof this.reducer === "object" && this.reducer !== null){
			for (var i = 0; i < this.reducer.length; i++) {
				if(typeof this.reducer[i] === "function"){
					const reducer = this.reducer[i];
					this.updateState(reducer(action, data, this.state));
				} else {
					throw new Error(typeof this.reducer[i] + " with index "+i+" in the array passed to the store setup is not a valid reducer. Reducer must be a function.");
				}
			}
		} else {
			throw new Error(typeof this.reducer + " passed to setup the store is not a valid reducer. Reducer must be either a function or an array of functions.");
		}
	}

	dispatch(action, data){
		this.addReducer(action, data);
	}

	addSubscriber(func, subscriptions = []){
		if(typeof func !== "function"){
			throw new Error("Subscriber must be a function");
		}

		this.subscribers.push({func: func, subscriptions: subscriptions});

		// To set initial values
		this.updateSubscribers();
	}

	updateSubscribers(){
		this.subscribers.map(subscriber => {
			// update all generic subscriptions
			// (subscribeers to entire store)
			if(subscriber.subscriptions.length === 0){
				subscriber.func(this.state);
			} else {
				// update local subscriptions
				// still passes entire state
				subscriber.subscriptions.map(subscription => {
					if(JSON.stringify(this.state[subscription]) !== JSON.stringify(this.previousState[subscription])){
						subscriber.func(this.state);
					}
				});
			}
		});
	}
}
