const form  = document.querySelector('.form-container');

const username = document.querySelector('input.username');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const country = document.querySelector('input.country');
const zipcode = document.querySelector('input.zipcode');

form.addEventListener('submit', (e) => performFormValidityCheck(e));



const initiateUsernameConstraint = () => {
    username.minLength = 6;
    username.maxLength = 30;
    username.pattern = "^[a-zA-Z]+[a-zA-Z0-9]*$";
    username.required = true;
}

function showError() {
    if (username.validity.tooShort) {
        username.setCustomValidity('Your username should contain at least 4 characters.');
        username.reportValidity();
    } else if (username.validity.tooLong) {
        username.setCustomValidity('Your username should contain at most 20 characters.');
        username.reportValidity();
    } else if (username.validity.patternMismatch) {
        username.setCustomValidity('Your username should contain only letters and numbers. It should not start with a number.');
        username.reportValidity();
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity('Input a valid email.');
        email.reportValidity();
    } else if (email.validity.tooShort) {
        email.setCustomValidity(`Your email should be at least ${email.minLength} characters. You entered ${email.value.length} so far`);
        email.reportValidity();
    }
}

function performFormValidityCheck(e) {
    if(!username.validity.valid ||
        !email.validity.valid ||
        !password.validity.valid ||
        !country.validity.valid ||
        !zipcode.validity.valid) {
        showError();
        e.preventDefault();
    }
}


initiateUsernameConstraint();
