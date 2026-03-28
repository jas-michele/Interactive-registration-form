let form = document.querySelector('form');
let username = document.getElementById('username');
let userError = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let confirmPassword = document.getElementById('confirmPassword');
let conpasswordError = document.getElementById('confirmPasswordError');


window.addEventListener("load", () => {
    const savedUserName = localStorage.getItem('userN');

    if (savedUserName) {
        username.value = savedUserName;
    }
})

form.addEventListener("submit", registerUser);

function registerUser(e) {
    e.preventDefault();

    let isValid = true;
    if (username.value === "") {
        username.setCustomValidity("Please create a username!")
        isValid = false;
    } else {
        username.setCustomValidity("");
    }

    username.reportValidity();
    userError.textContent = username.validationMessage;

    if (!validPassword()) isValid = false;

    if (!matchingPasswords()) isValid = false;

    if (isValid) {
        localStorage.setItem('userN', username.value);
        alert(`Thank you for registering ${username.value}!`);
        form.reset();
    }
}

email.addEventListener('input', function (e) {

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');

    } else if (email.validity.valueMissing) {
        email.setCustomValidity("'We need your email address to contact you!'");
    } else {
        email.setCustomValidity("");
    }

    email.reportValidity();
    emailError.textContent = email.validationMessage;
})

function matchingPasswords() {
    let isValid = true;

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        isValid = false;
    } else {
        confirmPassword.setCustomValidity("");
    }

    confirmPassword.reportValidity();
    conpasswordError.textContent = confirmPassword.validationMessage;

    return isValid;
}

function validPassword() {
    let isValid = true;

    if (password.value === "") {
        {
            password.setCustomValidity("Password is required");
            isValid = false;
        }
    } else if (password.value.length < 8) {
        password.setCustomValidity("Password must be at least 8 characters");
        isValid = false;
    } else if (!/[A-Z]/.test(password.value)) {
        password.setCustomValidity("Must include an uppercase letter");
        isValid = false;
    } else if (!/[a-z]/.test(password.value)) {
        password.setCustomValidity("Must include a lowercase letter");
        isValid = false;
    } else if (!/[0-9]/.test(password.value)) {
        password.setCustomValidity("Must include a number");
        isValid = false;
    } else {
        password.setCustomValidity("");
    }

    password.reportValidity();
    passwordError.textContent = password.validationMessage;

    return isValid;
}