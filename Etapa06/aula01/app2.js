const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUserName = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const isAvalidUsername = testUserName(event.target.username.value)

    if(isAvalidUsername) {
        feedback.textContent = 'username válido =)'
    return
    }
    
    feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})

form.username.addEventListener('keyup', event => {
    const isAvalidUsername = testUserName(event.target.value)
    if(isAvalidUsername) {
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')
})