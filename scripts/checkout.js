let button = document.getElementById("submit");
let validation = document.getElementById("validation");

function addValidationMessage(input) {
    let field = input.getAttribute("id");
    validation.innerHTML = field + "is a required field";
}

function removeValidationMessage() {

}

button.addEventListener('click', function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name");

    firstName.value === ""
    ? addValidationMessage(firstName)
    : removeValidationMessage();
});