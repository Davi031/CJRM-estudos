//const present = new Date()

console.log(present)

console.log('getFulYear:', present.getFullYear())
console.log('getMonth:', present.getMonth())
console.log('getMonth:', present.getDate())//Zero based
console.log('getMonth:', present.getDay())//Zero based
console.log('getMonth:', present.getHours())
console.log('getMonth:', present.getMinutes())
console.log('getMonth:', present.getSeconds())

console.log('timestamp:', present.getTime())//milissegundos desde 1900 e bolinhas
console.log('toDateString:', present.toDateString())//Só a data atual
console.log('toTimeString:', present.toTimeString())//Só a última parte do data object
console.log('toLocaleString:', present.toLocaleString())

//Aula 01-02
const past = new Date('May 1 2020 7:47:00')
const present = new Date()

const difference = present.getTime() - past.getTime()
console.log(difference)//Retorno em milissegundos

const seconds = Math.round(difference / 1000) //Round para arredondar
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

console.log(`Escrito há ${days} dias`)

const timestamp = 167239232090980
console.log(new Date(timestamp))//Passando variável como argumento do método construtor.