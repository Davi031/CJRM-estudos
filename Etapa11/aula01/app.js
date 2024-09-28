console.log(1)
console.log(2)

setTimeout(() => { //setTimeout é uma função assíncrona 
    console.log('Função de callback executada')
}, 2000)

console.log(3)
console.log(4)