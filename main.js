const submitBtn = document.querySelector('#submitBtn');
const input = document.querySelectorAll('input');
const errorText = document.querySelectorAll('.error-text');
const errorIcon = document.querySelector('.error-icon');
const form = document.querySelector('form');
const inputImg = document.querySelectorAll('img');
const emptyP = document.querySelectorAll('.emptyP');
const emailInput = document.querySelector('#email');
const emailText = document.querySelector('#emailText');
const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmptyFields();
    validateEmail();

})


// Validate email
function validateEmail() {
    let emailValue = emailInput.value;
    const emailIcon = emailInput.nextElementSibling;

    if(!emailRegex.test(emailValue) && emailValue != "") {
        emailIcon.classList.remove('d-none');
        emailText.classList.remove('d-none');
    } else {
       emailText.classList.add('d-none');
    }
}


// If input is empty show error icon and error text
function checkEmptyFields() {
    for(let i = 0; i < input.length; i++) {
        if(input[i].value  === "") {
            inputImg[i].classList.remove('d-none');
            emptyP[i].classList.remove('d-none');
        }else {
           inputImg[i].classList.add('d-none');
           emptyP[i].classList.add('d-none');
        }
    }
}


