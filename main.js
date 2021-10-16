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

// EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmptyFields();

})

// if input is empty add class input error to the input element and remove d-none from img and p element
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
