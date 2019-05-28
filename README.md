# Sigdux
https://codepen.io/mdd/pen/wGRqbw

## Core
Redux allow you to:
* Commit changes to the store
* Subscribe to changes in the store

### Core - in depth
Redux allow you to:
* Commit changes to the store
	* Action - intension to change the store. Dispatch = fire off an action
	* Reducer - handles actions - what should happen when an action is dispatched?
* Subscribe to changes in the store


### Explained
![Redux flow explained](https://cdn-images-1.medium.com/max/1200/0*cntBtPADjE2ykLSP.png)


### What we'll build
A small counter app, that has the actions INCREMENT and DECREMENT. The actions are sent to (dispatched) the reducer function, that knows what to do. What you return from the reducer is the new value of the entire state. We'll learn to hook it up to a button, and display the result in the DOM. 

### Our store
```javascript
createStore() 	=> fn to hook up the reducers
dispatch() 		=> fn to fire off actions
subscribe() 	=> fn to subscribe to changes in the store
```