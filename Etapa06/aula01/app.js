//preventDefault() evitar carregamento da página.
const form = document.querySelector('.signup-form')
//const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(usernameInput.value) //primeira forma

     console.log(form.username.value)//Com referencia do id do input

    //atráves de um atributo name

    console.log(event.target.username.value)
})

const username = 'rogerm123'
const pattern =  /^[a-z]{6,}$/
 const isAMatch = pattern.text(username)

if (isAMatch) {
 console.log('o teste da regex passou =)')   
 } else {
 console.log('o teste da regex não passou =(')
}

const result = username.search(pattern)

console.log(result)