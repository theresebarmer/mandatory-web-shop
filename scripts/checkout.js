let button = document.getElementById("submit");

function addValidationMessage() {

}

function removeValidationMessage() {

}

button.addEventListener('click', function() {
    let firstName = document.getElementById("first-name");

    firstName === ""
    ? addValidationMessage()
    : removeValidationMessage();
});