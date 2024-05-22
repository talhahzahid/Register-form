



const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnic = document.querySelector('#cnic');
const age = document.querySelector('#age');
const form = document.querySelector('#form');

let userregex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/
let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passregex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let cnicregex = /^42\d{11}$/;;
let ageregex = /^(1[9]|[2-9][0-9])$/;





form.addEventListener('submit', (event) => {
    event.preventDefault();
    {
        console.log(userregex.test(username.value))
        console.log(username.value)
        console.log(emailregex.test(email.value))
        console.log(email.value)
        console.log(passregex.test(password.value))
        console.log(password.value)
        console.log(cnicregex.test(cnic.value))
        console.log(cnic.value)
        console.log(ageregex.test(age.value))
        console.log(age.value)

    }
})


