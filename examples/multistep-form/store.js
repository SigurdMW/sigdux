function reducer(action, data, state){
  switch (action) {
    case "SET_STEP_1":
      return Object.assign({}, state, {name: data.name, address: data.address});
    case "SET_STEP_2":
      return Object.assign({}, state, {email: data.email, age: data.age});
    case "COMPLETE_STEP":
      if(!state.completedSteps.includes(data)){
        const complete = state.completedSteps.concat(data);
        return Object.assign({}, state, {completedSteps: complete});
      }
      return state;
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
