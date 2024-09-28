//const paragraph = document.querySelector('p')

//const paragraph = document.querySelector('.error')

//const errorDiv = document.querySelector('div.error')

//const h1 = document.querySelector('body > h1')

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
    console.log(paragraph)
})

const erros = document.querySelectorAll('.error')

//Obter um elemento através do ID
const title = document.getElementById('title')

//Obter elementos através do nome da classe
const errors = document.getElementsByClassName('error')

//Obter elementos através do nome da tag
const paragraph = document.getElementsByTagName('p')
