document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const firstNameInput = document.getElementById('firstName');
    const firstNamePattern = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
    const firstNameError = document.getElementById('firstName-error');

    if (!firstNamePattern.test(firstNameInput.value)) {
        firstNameError.textContent = "First Name should contain 2-30 characters";
        firstNameInput.style.border = "1px solid red";
        isValid = false;
    } else {
        firstNameError.textContent = "";
        firstNameInput.style.border = "";
    }

    const lastNameInput = document.getElementById('lastName');
    const lastNamePattern = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
    const lastNameError = document.getElementById('lastName-error');

    if (!lastNamePattern.test(lastNameInput.value)) {
        lastNameError.textContent = "Last Name should contain 2-30 characters";
        lastNameInput.style.border = "1px solid red";
        isValid = false;
    } else {
        lastNameError.textContent = "";
        lastNameInput.style.border = "";
    }

    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById('email-error');

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email";
        emailInput.style.border = "1px solid red";
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.style.border = "";
    }

    const passwordInput = document.getElementById('password');
    const passwordPattern = /^.{6,}$/;
    const passwordError = document.getElementById('password-error');

    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Please use at least 6 characters";
        passwordInput.style.border = "1px solid red";
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.style.border = "";
    }
});
