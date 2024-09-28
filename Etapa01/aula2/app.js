console.log('hello, world')

const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName

console.log(fullName)

//Acessando caracteres
console.log(fullName[2])

//Comprimento de uma String
console.log(fullName.length)

// Métodos de String
console.log(fullName.toUpperCase())

const result = fullName.toLocaleLowerCase()
console.log(result, fullName)

// método comuns de Strings
const email = 'leon@rogermelo.com'

// const lastIdexOfA = email.lastIndexOf('a')

const emailSlice = email.slice(0, 4)

console.log(emailSlice)

const emailReplace = email.replace('leon', 'chun-li')

console.log(emailReplace)

//Inteiros e decimais
const radius = 10
const pi = 3.14

// Operadores aritméticos
const area = pi * radius ** 2

// Ordem de operações
console.log(area)

// 1(primeiro) parênteses
// 2(segundo) expoentes ou raízes
// 3(terceiro) multiplicação e divisão
// 4(quarto) adição e subtração

const crazyOperation = 5 * (10 - 3) ** 2

// Operadores de incremento e decremento

let postLikes = 10

// postLikes = postLikes + 1
//Atalho:

postLikes++

console.log(postLikes)

//Operadores addition, subtraction, multiplication e division

postLikes += 10 // 20
postLikes -= 5 // 5
postLikes *= 3 // 30
postLikes /= 2 // 5

// NaN - not a number

console.log(7 / 'oi')

//concatenação de string com número

const likesMessage = 'O post tem' + postLikes + 'likes.'

console.log(likesMessage)

const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Mathues Saad'
const postComments = 15

//Usando cocatenação 
//const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem' + postComments + 'coment'

// Usando template Strings
//const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

// criando templates HTML
 const html = `<h2>${postTitle}</h2> 
 <p>Autor: ${postAuthor}</p>
 <span>Este post tem ${postComments} comentários</span>
 `



