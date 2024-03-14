const inputPassword = document.querySelector(`.containerPassword`)
const inputPasswordConfirm = document.querySelector(`.containerPasswordconfirm`)
const passwordContainers = document.querySelectorAll(`.containerPassword`)
const btnCreateCount = document.querySelector(`.btnCreateAcount`)
const passwordError = document.querySelector('.passwordError')

btnCreateCount.addEventListener(`click`,(e)=>{
    e.preventDefault();
    console.log("hiciste click");
    if(inputPassword.value != inputPasswordConfirm.value) {
        inputPassword.classList.add("redInput")
        inputPasswordConfirm.classList.add("redInput")
        passwordError.classList.remove(`nonVisible`)
        
        passwordContainers.forEach(container => {
            container.addEventListener("input",()=>{
                if(inputPassword.value != inputPasswordConfirm.value) {
                    inputPassword.classList.add("redInput")
                    inputPasswordConfirm.classList.add("redInput")
                    passwordError.classList.remove(`nonVisible`)
                }else {
                    inputPassword.classList.remove("redInput")
                    inputPasswordConfirm.classList.remove("redInput")
                    passwordError.classList.add(`nonVisible`)
                }
            })
        })
    }else{
        window.location.href = "./congratulation.html"
    }
})
