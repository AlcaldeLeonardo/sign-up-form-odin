const inputPassword = document.querySelector(`.containerPassword`)
const inputPasswordConfirm = document.querySelector(`.containerPasswordconfirm`)
const form = document.querySelector(`.form`)
const passwordError = document.querySelector('.passwordError')

function validatePassword(){
    let value1 = inputPassword.value 
    let value2 = inputPasswordConfirm.value
    
    if(value1 != value2 && value2 != "") {
        inputPassword.classList.add(`redInput`)
        inputPasswordConfirm.classList.add(`redInput`)
        passwordError.classList.remove(`nonVisible`)
    }else{
        inputPassword.classList.remove(`redInput`)
        inputPasswordConfirm.classList.remove(`redInput`)   
        passwordError.classList.add(`nonVisible`)
    }
}

form.addEventListener(`submit`, e =>{
    e.preventDefault();
    if(inputPassword.value == inputPasswordConfirm.value) {
        console.log("se envio");
        window.location.href = `/congratulation.html`
    }
})

inputPassword.addEventListener(`input`, validatePassword)
inputPasswordConfirm.addEventListener(`input`, validatePassword)