const form = document.getElementById("UpdatePatientForm");
form.addEventListener("submit", event => {
  //event.preventDefault();
});
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", event => {
  event.preventDefault();
  form.reset();
});
