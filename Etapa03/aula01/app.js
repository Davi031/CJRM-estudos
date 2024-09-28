// Function declaration
sayHi()

function sayHi () {
    console.log('oi')
}

//Function Expression
const showFood = function(){
    console.log('pizza')
}

showFood()

// Argumentos, parâmetros e dafualt parameters

const myFunc = function (name, lastname){
    console.log(`Oi, ${name} ${lastname}!`)
}

myFunc('Roger', 'Melo')

const double = function (number) {
    return number * 2
}

const result = double(3)

const showResult = function (value){
    return `O resultado é: ${value}`
}

console.log(showResult(result))
