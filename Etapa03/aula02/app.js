// função tradicional
//const double = function (number) {
//    return number * 2
//}

//Arrow function
const double = number => number * 2

const result = double(3)

const name = 'Roger'

//funções
const sayHi = () => 'oi'

const greet = sayHi()
console.log(greet)

//métodos
const nameInUpperCASE = name.toUpperCase()

const myFunc = callback => {
    const value = 77

    callback(value)
}

myFunc(number => {
    console.log(number)
})

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

//socialNetworks.forEach((socialNetworks, index, array) =>//{
 //   console.log(index, socialNetworks, array)
//})

const logArrayInfo = (socialNetworks, index, array) => {
    console.log(index, socialNetworks, array)
}

socialNetworks.forEach(logArrayInfo)