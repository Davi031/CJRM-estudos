let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPost: ['Empadão de Frango', '4 receitas de purê de batata'],
    login: function() {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    }
}

//console.log(user.name)
//user.age = 32
//console.log(user.age)
const key = 'email'
console.log(user[key])
//console.log(user['name'])
//user['name'] = 'José' Reatribuição de Valor
// console.log(user['name'])

user.login()

user.logout()

const name = 'Joaquim'

name.toUppeCase() // Função criado dentro do objeto prototype
