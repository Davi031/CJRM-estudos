const paragraph = document.querySelector('p')

paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelector('p')

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText =+ ` Novo texto ${index + 1}`
});

const div = document.querySelector('.content')

div.innerHTML += '<h2>Novo h2</h2>'

const people = ['Jonatas', 'nicius', 'Diego']

people.forEach(person => {  
    div.innerHTML += `<p>${person}</p>` 
})


const link = document.querySelector('a')

console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://rogermelo.com.br/')

link.innerText = 'Website do Roger Melo'

const paragrafo = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragrafo.setAttribute('class', 'sucess')

paragrafo.setAttribute('style', 'color:green;')


//Modificando estilos css
const title = document.querySelector('h1')

//title.setAttribute('style', 'margin: 50px;')

console.log(title.style)
console.log(title.style.color)

title.style.margin = '50px'
title.style.color = 'pink'
title.style.fontSize = '50px'
titile.style.margin = ''//remover propriedade