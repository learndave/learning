const form  = document.querySelector('.form-container');

const username = document.querySelector('input.username');
const email = document.querySelector('input.email');
const phone = document.querySelector('input.phone');

// username.addEventListener('input', performUsernameValidityCheck);
// email.addEventListener('input', performUsernameValidityCheck);
// phone.addEventListener('input', performPhoneValidityCheck);

form.addEventListener('submit', (e) => performFormValidityCheck(e));

function showError() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Input a valid email.');
        email.reportValidity();
    }
    if (email.validity.tooShort) {
        email.setCustomValidity(`Your email should be at least ${email.minLength} characters. You entered ${email.value.length} so far`);
        email.reportValidity();
    }
}

function performFormValidityCheck(e) {
    console.log(email)
    if(!username.validity.valid || !email.validity.valid || !phone.validity.valid ) {
        showError();
        e.preventDefault();
    }
}
