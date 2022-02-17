
console.log('HELLO FROM THE JS SIDE')


if (getTitle == 'Sign-up Form') {
    const confirm = document.querySelector('input[name=password_confirm]')

    //inside we are going to call the → callbackfunction
    confirm.addEventListener('change', onChange)
}


// this is a normal function that will be used as a → callback function
function onChange() {
    const password = document.querySelector('input[name=password]')
    const confirm = document.querySelector('input[name=password_confirm]')


    if (confirm.value === password.value) {
        confirm.setCustomValidity('')
    } else {
        confirm.setCustomValidity('passwords does not match')
    }

}