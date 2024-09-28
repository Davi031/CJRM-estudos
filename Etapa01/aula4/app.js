//Booleans e comparações
console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('wayne')
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger')

console.log(arrayIncludes) // true

// Operadores de comparação
const age = 31
const name = 'roger'

//console.log(age == 31)
//console.log(age == 35)
//console.log(age != 31)
//console.log(age > 31)
//console.log(age > 32)
//console.log(age <= 31)
//console.log(age >= 31)

//console.log(name == 'roger')
//console.log(name == 'Roger')
//console.log(name > 'belinha')
//console.log(name > 'Roger')
//console.log(name > 'Belinha')

//'igual a' e 'diferente de'
// consolo.log(age == 31)
// console.log(age =! 31)

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
//console.log(age === 31)
//console.log(age !== '31')

let score = '100'

score = Number(score) //Função contrutora

console.log(score + 1)

const crazyConversion = Number('Maçã') // Retorna NaN
const convertedNumber = String(97)
const booleanConversion = Boolean(10)



