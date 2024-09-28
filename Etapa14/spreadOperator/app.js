//Spread em arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// const newArray = arr1.concat(arr2) Modo antigo de juntar dois arrays
const newArray = [0, ...arr1, 3.5, ...arr2, 7] //Modo novo e possibilidade de adicionar novo elementos

console.log(newArray)

//Spread em Arrays
const obj1 = { prop1: 1, prop2: 2}
const obj2 = { prop3: 3, prop4: 4}
///const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2}

//Spread em Strings
const str = 'abc'

console.log([...str])//Espalhando o spread em uma array

const getReversedString = string => [...string]
.reverse()
.join('')

console.log(getReversedString('123'))

const numbers = [7, 3, 5, 3.1, 9]

console.log(...numbers)
console.log(Math.min(...numbers))
console.log(Math.max(...numbers)) //é possível encaixar um array como argumento de funções que não necessariamente recebem um array como argumento, porque por de baixo dos panos os itens desse array serão espalhados como argumentos dessa função.