let form = document.querySelector('form'); 
let username = document.getElementById('username');
let email = document.getElementById('email'); 
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

window.addEventListener("load", () => {
    const savedUserName = localStorage.getItem('userN');

    if (savedUserName){
        username.value = savedUserName;
    }
})

form.addEventListener("submit", registerUser);

function registerUser(e) {
    e.preventDefault();
    
    let isValid = true;
    if (username.value === ""){
        username.setCustomValidity("Please create a username!")
        isValid = false;
    }else {
        username.setCustomValidity("");
    }

    if(isValid){
        localStorage.setItem('userN', username.value);
        form.reset();
    }

}

email.addEventListener('input', function(e){

    if(email.validity.typeMismatch){
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
        
    }else if (email.validity.valueMissing){
        email.setCustomValidity("'We need your email address to contact you!'");
    }else  {
        email.setCustomValidity("");
    }

    email.reportValidity();
    emailError.textContent = email.validateMessage;
})