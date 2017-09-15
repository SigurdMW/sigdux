class Sigdux {
	constructor(reducer, defaultStore){
		this.state = defaultStore || {};
		this.subscribers = [];
	}

	getState(){
		return this.state;
	}

	updateState(newState){
		this.state = Object.assign({}, newState);
		this.updateSubscribers();
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
	}

	updateSubscribers(){
		this.subscribers.map(subscriber => {
			subscriber(this.state);
		});
	}
}
