// https://github.com/reactjs/redux/blob/master/src/createStore.js

// dispatch(action, data)
//    => reducer(action, data)
//    => updateStore
//    => subscribers(updatedData)

/*
1. setup store(takes reducer as argument)
2. dispatch
3. reducer / React
4. updateStore
5. notify Subscribers // update
*/

function reducer(action, data, state){
	switch(action){
		case "GET_USERS":
			return Object.assign({}, state, {user: "Sigurd"});
		default:
			return data;
	}
}

// Init state
const anotherStore = new Sigdux(reducer, {});

// add subscribers
anotherStore.addSubscriber(onUpdateFunction);

// dispatch events
anotherStore.dispatch("GET_USERS", {});

function onUpdateFunction(store){
	// ...
	console.log("\n=== UPDATING STATE ===");
	console.log(store);
	console.log("=== UPDATING STATE FINISHED ===\n");
}

// console.log("\n=== REGISTRED LISTENERS ===");
// console.log(anotherStore.subscribers);
//
// console.log("\n=== CURRENT STATE ===");
// console.log(anotherStore.getState());


// let store = (state) => {
// 	return {
// 		getState(){
// 			return {somestate: "sdasas"};
// 		}
// 	}
// }
//
// function createStore(){
// 	return state;
// }
//
// const myStore = store();
//
// console.log(myStore.getState());
