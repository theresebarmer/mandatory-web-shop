let button = document.getElementById("submit");
let validation = document.getElementById("validation");

function addValidationMessage(input) {
    let field = input.getAttribute("id");
    let existingParagraph = document.getElementById(field + "Val");
    if(existingParagraph) {
        existingParagraph.remove();
    }
    let p = document.createElement("p");
    p.setAttribute("id", field + "Val");
    p.innerHTML = field + "is a required field";
    validation.appendChild(p);
}

function removeValidationMessage(input) {
    let field = input.getAttribute("id");
    let p = document.getElementById(field + "Val");
    if(p) {
        p.remove();
    }
}

function validateField(input) {
    input.value === ""
        ? addValidationMessage(input)
        : removeValidationMessage(input);
}

function validateForm() {
    let firstName = document.getElementById("first-name");
    validateField(firstName);

    let lastName = document.getElementById("last-name");
    validateField(lastName);

    let email = document.getElementById("email");
    validateField(email);

    let streetAddress = document.getElementById("street-address");
    validateField(streetAddress);

    let zipCode = document.getElementById("zip-code");
    validateField(zipCode);

    let city = document.getElementById("city");
    validateField(city);
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    validateForm();
});

