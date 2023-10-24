const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const validateUsername = (username) => {
    if (username.value === undefined || username.value === null || username.value === '') {
        showError (username, "Username cannot be empty");
    } else {
        showSuccess (username);
    }
};

const validateEmail = (email) => {
    if (email.value === undefined || email.value === null || email.value === '') {
        showError (email, "Email cannot be empty");
    } else if (!isValidEmail(email.value)) {
        showError (email, "Email is not valid");
    } else {
        showSuccess (email);
    }
};

const validatePassword = (password) => {
    if (password.value === undefined || password.value === null || password.value === '') {
        showError (password, "Password cannot be empty");
    } else {
        showSuccess (password);
    }
};

const validatePassword2 = (password2, password) => {
    if (password2.value === undefined || password2.value === null || password2.value === '') {
        showError (password2, "Password2 cannot be empty");
    } else if (password2.value !== password.value) {
        showError (password2, "Password2 does not match with Password");
    } else {
        showSuccess (password2);
    }
};

const isValidEmail = (emailId) => {
    const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    return emailRegex.test(String(emailId).toLowerCase());
}

const showSuccess = (element) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control success';
};

const showError = (element, message) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector ('small');
    small.innerText = message;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUsername(username);
    validateEmail (email);
    validatePassword(password);
    validatePassword2 (password2, password);    
});


