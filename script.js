document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const firstNameInput = document.getElementById('firstName');
    const firstNamePattern = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
    const firstNameError = document.getElementById('firstName-error');

    if (!firstNamePattern.test(firstNameInput.value)) {
        firstNameError.textContent = "First Name should contain 2-30 characters";
        firstNameInput.style.border = "1px solid red";
        firstNameInput.style.background = "url('./Group 11 (1).png') no-repeat right";
        firstNameInput.style.backgroundPositionX = "95%";
        isValid = false;
    } else {
        firstNameError.textContent = "";
        firstNameInput.style.border = "";
        firstNameInput.style.background = "";
    }

    const lastNameInput = document.getElementById('lastName');
    const lastNamePattern = /^[A-Za-z]{2,30}(-[A-Za-z]{2,30})?$/;
    const lastNameError = document.getElementById('lastName-error');

    if (!lastNamePattern.test(lastNameInput.value)) {
        lastNameError.textContent = "Last Name should contain 2-30 characters";
        lastNameInput.style.border = "1px solid red";
        lastNameInput.style.background = "url('./Group 11 (1).png') no-repeat right";
        lastNameInput.style.backgroundPositionX = "95%";
        isValid = false;
    } else {
        lastNameError.textContent = "";
        lastNameInput.style.border = "";
        lastNameInput.style.border = "";
        lastNameInput.style.background = "";
    }

    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById('email-error');

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email";
        emailInput.style.border = "1px solid red";
        emailInput.style.background = "url('./Group 11 (1).png') no-repeat right";
        emailInput.style.backgroundPositionX = "95%";
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.style.border = "";
        emailInput.style.border = "";
        emailInput.style.background = "";
    }

    const passwordInput = document.getElementById('password');
    const passwordPattern = /^.{6,}$/;
    const passwordError = document.getElementById('password-error');

    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Please use at least 6 characters";
        passwordInput.style.border = "1px solid red";
        passwordInput.style.background = "url('./Group 11 (1).png') no-repeat right";
        passwordInput.style.backgroundPositionX = "95%";
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.style.border = "";
        passwordInput.style.border = "";
        passwordInput.style.background = "";
    }
});
