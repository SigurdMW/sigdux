store.addSubscriber(goToNextStepOnValid);

function goToNextStepOnValid(store){
  const completedSteps = store.completedSteps;
  completedSteps.map(completed => {
    manageStepsUI(completed);
  });
}

function manageStepsUI(stepIndex){
  const nextStep = stepIndex + 1;
  history.pushState(null, null, "#"+nextStep);
  document.querySelector(".step-"+nextStep).style.display = "block";
  document.querySelector(".step-"+stepIndex).style.display = "none";
}

function handleSubmit(form, e){
  e.preventDefault();
  store.dispatch("SET_STEP_1", {name: form.name.value, address: form.address.value});

  if(store.getState().name && store.getState().address){
    store.dispatch("COMPLETE_STEP", 1);
  }
}
