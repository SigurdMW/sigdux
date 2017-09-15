const dispatch = (action, data) => {anotherStore.dispatch(action, data)};
anotherStore.addSubscriber(updateDom);

function updateDom(store){
  document.querySelector("#root").innerHTML = store.user;
  document.querySelector(".counter-result").innerHTML = store.count;
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
