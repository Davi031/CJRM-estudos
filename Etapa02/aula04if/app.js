const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if(simpsons.length >= 3){
    console.log('o array tem bastante personagens')
}

const  password = 'owqe!1@#!o'

if(password.length >= 12 && password.includes('1')){
    console.log('Senha muito forte =)')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5){
    console.log('Essa senha tem 8 ou mais caracteres')
} else {
    console.log('A senha deve conter 8 ou mais caracteres')
}

