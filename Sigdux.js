class Sigdux {
	constructor(reducer, defaultStore) {
		this.state = defaultStore || {};
		this.subscribers = [];
		this.reducer = reducer;
	}

	getState() {
		return this.state;
	}

	updateState(newState) {
		const state = Object.assign({}, newState);
		this.state = state
		this.updateSubscribers()
	}

	dispatch(action, data) {
		this.updateState(this.reducer(action, data))
	}

	addSubscriber(func, subscriptions = []) {
		if (typeof func !== "function") {
			throw new Error("Subscriber must be a function");
		}

		this.subscribers.push({ func: func, subscriptions: subscriptions });

		// To set initial values
		this.updateSubscribers();
	}

	updateSubscribers() {
		this.subscribers.map(subscriber => {
			subscriber.func(this.state);
		});
	}
}

window.sigdux = Sigdux