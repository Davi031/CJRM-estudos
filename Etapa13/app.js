localStorage.setItem('name', 'Roger')
localStorage.setItem('age', 32)

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

localStorage.setItem('name', 'Zé')//Modificando Item
localStorage.setItem('age', 37)//Modificando Item

name = localStorage.getItem('name')
age = localStorage.getItem('age')
console.log(name)//Name aparecerá
localStorage.removeItem('name')//Para remover um item

name = localStorage.getItem('name')
console.log(name)

localStorage.clear()//Para remover todos os itens

name = localStorage.getItem('name')
age = localStorage.getItem('age')

//Passando dados complexos para o LocalStorage

const myArray = [
    {a: 1, b: 2},
    {c: 3, d: 4},
    {e: 5, d: 6}
]

localStorage.setItem('myArray', JSON.stringify(myArray))//Tornando o objeto em String

const JSONFromLocalStorage = localStorage.getItem('myArray')//Obtendo String

const myConvertedArray = JSON.parse(JSONFromLocalStorage)//Convertendo de String para objeto novamente

console.log(myConvertedArray)