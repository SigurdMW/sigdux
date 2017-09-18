import Sigdux from './core/Sigdux';

function incrementReducer(action, data, state){
	switch(action){
		case "INCREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count + 1});
		case "DECREMENT_COUNTER":
			return Object.assign({}, state, {count: state.count - 1});
		default:
			return state;
	}
}

function userReducer(action, data, state){
	switch(action){
		case "SET_USERNAME":
			return Object.assign({}, state, {user: data});
		case "SET_COUNT":
			return Object.assign({}, state, {count: data});
		case "SET_USER":
			return Object.assign({}, state, {user: data});
		default:
			return state;
	}
}

const reducers = [incrementReducer, userReducer];

// Initial store data
const initialState = {
	user: null,
	count: 0
};

// Setup store
const anotherStore = new Sigdux(reducers, initialState);

const dispatch = (action, data) => {anotherStore.dispatch(action, data)};

anotherStore.addSubscriber(updateName, ["user"]);
anotherStore.addSubscriber(updateCounter, ["count"]);

function updateCounter(store){
  document.querySelector(".counter-result").innerHTML = store.count || 0;
}

function updateName(store){
  if(store.user){
    document.querySelector("#root").innerHTML = (typeof store.user === "string") ? store.user : JSON.stringify(store.user);
  } else {
    document.querySelector("#root").innerHTML = "";
  }
}

document.querySelector(".increment").addEventListener("click", function(){
  dispatch("INCREMENT_COUNTER");
});

document.querySelector(".decrement").addEventListener("click", function(){
  anotherStore.dispatch("DECREMENT_COUNTER");
});


document.querySelector(".name-input").addEventListener("input", function (event){
  anotherStore.dispatch("SET_USERNAME", this.value);
});
