document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

let isValid = true;

const firstName = document.getElementById('firstName').value;
const firsNamePattern = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
const firsNameError = document.getElementById('firstName-error');

if (!firsNamePattern.test(firstName)) {
    firsNameError.textContent = "First Name should contain 2-30 characters";
    isValid = false;
} else {
    firsNameError.textContent = "";
}

const lastName = document.getElementById('lastName').value;
const lastNamePatter = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
const lastNameError = document.getElementById('lastName-error');

if (!lastNamePatter.test(lastName)) {
    lastNameError.textContent = "Last Name should contain 2-30 characters";
    isValid = false;
} else {
    lastNameError.textContent = "";
}

const email = document.getElementById('email').value;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailError = document.getElementById('email-error');

if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter valid email";
    isValid = false;
} else {
    emailError.textContent = "";
}

const password = document.getElementById('password').value;
const passwordPattern = /^.{6,}$/;
const passwordError = document.getElementById('password-error');

if (!passwordPattern.test(password)) {
    passwordError.textContent = "Please use at least 6 characters";
    isValid = false;
} else {
    passwordError.textContent = "0;"
}

})