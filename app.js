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

function updateNameState(el, event){
  anotherStore.dispatch("SET_USERNAME", el.value);
}
