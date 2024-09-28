let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPost: [{ title: 'Empadão de frango', likes:30 }, { title: '4 receitas de purê de batata', likes: 50 }],
    login: function() {
        console.log('Usuário logado')
    },
    logout () {
        console.log('Usuário deslogado')
    },
    logBlogPosts () { //shortcut
        console.log(`${this.name}escreveu os seguintes posts:`)

        this.blogPost.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPosts()

// o objeto Math
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.2

console.log(Math.round(area))//Arredonda Para o mais próximo
console.log(Math.floor(area))//Arredonda para baixo
console.log(Math.ceil(area))//Arredonda para cima
console.log(Math.trunc(area))//torna decimal

//Números aleatórios
const randomNumber = Math.random()

console.log(randomNumber)

console.log(Math.round(randomNumber * 100))

//valores primitivos
//let scoreOne = 50
//let scoreTwo = scoreOne

//console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

//scoreOne = 100

//console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

// valores de refeência
let userOne = { name: 'Roger', age: 31}
let userTwo = userOne

console.log(userOne, userTwo)

userTwo.age =32

console.log(userOne, userTwo)
