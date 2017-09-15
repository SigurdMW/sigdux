function reducer(action, data, state){
  switch (action) {
    case "SET_NAME":
      return Object.assign({}, state, {name: data});
    case "SET_EMAIL":
      return Object.assign({}, state, {email: data});
    case "SET_ADDRESS":
      return Object.assign({}, state, {address: data});
    case "SET_AGE":
      return Object.assign({}, state, {age: data});
    case "COMPLETE_STEP":
      const complete = state.completedSteps.concat(data);
      return Object.assign({}, state, {completedSteps: complete});
    case "UNCOMPLETE_STEP":
      const uncomplete = state.completedSteps.filter(item => item !== data);
      return Object.assign({}, state, {completedSteps: uncomplete});
    default:
      return state;
  }
}

defaultStore = {
  name: null,
  email: null,
  address: null,
  age: null,
  completedSteps: []
}

const store = new Sigdux(reducer, defaultStore);
