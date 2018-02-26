let button = document.getElementById("submit");
let validation = document.getElementById("validation");

function addValidationMessage(input) {
    let field = input.getAttribute("id");
    validation.innerHTML += field + "is a required field";
}

function removeValidationMessage() {

}

button.addEventListener('click', function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name");

    firstName.value === ""
    ? addValidationMessage(firstName)
    : removeValidationMessage();

    let lastName = document.getElementById("last-name");
    lastName.value === ""
        ? addValidationMessage(lastName)
        : removeValidationMessage();

    let email = document.getElementById("email");
    email.value === ""
        ? addValidationMessage(email)
        : removeValidationMessage();

    let streetAddress = document.getElementById("street-address");
    streetAddress.value === ""
        ? addValidationMessage(streetAddress)
        : removeValidationMessage();

    let zipCode = document.getElementById("zip-code");
    zipCode.value === ""
        ? addValidationMessage(zipCode)
        : removeValidationMessage();

    let city = document.getElementById("city");
    city.value === ""
        ? addValidationMessage(city)
        : removeValidationMessage();
});

