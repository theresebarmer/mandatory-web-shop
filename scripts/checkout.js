let button = document.getElementById("submit");
let validation = document.getElementById("validation");

function addValidationMessage(input) {
    let field = input.getAttribute("id");
    let p = document.createElement("p");
    p.setAttribute("id", field + "Val");
    p.innerHTML = field + "is a required field";
    if(p) {
        p.remove();
    }
    validation.appendChild(p);
}

function removeValidationMessage(input) {
    let field = input.getAttribute("id");
    let p = document.getElementById(field + "Val");
    if(p) {
        p.remove();
    }
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name");

    firstName.value === ""
    ? addValidationMessage(firstName)
    : removeValidationMessage(firstName);

    let lastName = document.getElementById("last-name");
    lastName.value === ""
        ? addValidationMessage(lastName)
        : removeValidationMessage(lastName);

    let email = document.getElementById("email");
    email.value === ""
        ? addValidationMessage(email)
        : removeValidationMessage(email);

    let streetAddress = document.getElementById("street-address");
    streetAddress.value === ""
        ? addValidationMessage(streetAddress)
        : removeValidationMessage(streetAddress);

    let zipCode = document.getElementById("zip-code");
    zipCode.value === ""
        ? addValidationMessage(zipCode)
        : removeValidationMessage(zipCode);

    let city = document.getElementById("city");
    city.value === ""
        ? addValidationMessage(city)
        : removeValidationMessage(city);
});

