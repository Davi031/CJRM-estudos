const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span> :
    `

    clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)

//Aula 02
const present = new Date()

console.log(dateFns.format(present, 'MMMM')) //June 
console.log(dateFns.format(present, 'YY')) // 20
console.log(dateFns.format(present, 'dddd')) // Sunday
console.log(dateFns.format(present, 'Do'))  //7th
console.log(dateFns.format(present, 'DD/MM/YYYY')) // DATA NORMAL 08/06/2020   

const past = new Date('April 7 2020 17:00:00')

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))