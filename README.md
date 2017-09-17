# Sigdux
A understandable and simple state management framework.

## Usage
To set up your state container, you'll need a reducer and to create a new store and pass the reducer and default store values (optional).

### Setup example
```javascript
<script src="sigdux.js"></script>
<script>
  function reducer(action, data, state){
  	switch(action){
  		case "SET_USERNAME":
  			return Object.assign({}, state, {username: data});
  		default:
  			return state;
  	}
  }

  const initialState = {
  	user: null,
  	count: 0
  };

  const store = new Sigdux(reducer, initialState);
</script>
```

## Dispatch

```javascript
store.dispatch("SET_USERNAME", "someusername");
´´´

## Get store
You can get store at any point by running ´´´store.getState();´´´

## Adding subscribers
Subscribers are functions to run when the store gets updated. We have 2 types of subscribers; generic (runs on all changes in state) and local (runs when specified part of the store runs).

```javascript
// Generic example
store.addSubscriber(someFunction);

// runs on all changes in store
function someFunction(store){
  console.log(store);
}

// Local example
store.addSubscriber(someOtherFunction, ["username"]);

// runs only when store.username gets changed
function someOtherFunction(store){
  console.log(store);
}
´´´
