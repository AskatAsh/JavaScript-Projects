const passwordField = document.getElementById('passwordField');
const outputContainer = document.getElementById('outputContainer');

const numberOfCharacters = document.getElementById('numberOfCharacters');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const specialCharacters = document.getElementById('specialCharacters');
const strength = document.getElementById('strength');

let upper = false, num = false, specialChar = false, numOfChar = false;

passwordField.addEventListener('input', (e) => {
    // console.log(e.target.value);
    const password = e.target.value;
    console.log(password.length);
    
    if(password.length >= 6){
        numberOfCharacters.classList.add('highlight');
        numOfChar = true;

    }else{
        numberOfCharacters.classList.remove('highlight');
        numOfChar = false;
    }

    if(password.match(/[A-Z]/)){
        uppercase.classList.add('highlight');
        upper = true;
    }else{
        uppercase.classList.remove('highlight');
        upper = false;
    }

    if(password.match(/[0-9]/)){
        number.classList.add('highlight');
        num = true;
    }else{
        number.classList.remove('highlight');
        num = false;
    }

    if(password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        specialCharacters.classList.add('highlight');
        specialChar = true;
    }else{
        specialCharacters.classList.remove('highlight');
        specialChar = false;
    }

    if(upper && num && specialChar && numOfChar){
        strength.classList.add('highlight');
        strength.classList.remove('displayNone');

        numberOfCharacters.classList.add('displayNone');
        uppercase.classList.add('displayNone');
        number.classList.add('displayNone');
        specialCharacters.classList.add('displayNone');

    }else{
        strength.classList.remove('highlight');
    }
    
})

