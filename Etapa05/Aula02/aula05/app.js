//const paragraph = document.querySelector('p')

//console.log(paragraph.classList)

//paragraph.classList.add('error')
//paragraph.classList.remove('error')
//paragraph.classList.add('success')

const paragraphs = document.querySelector('p')

paragraphs.forEach(paragraph => {
    if(paragraph.textContent.includes('error')){
        paragraph.classList.add('error')
    }

    if(paragraph.textContent.includes('success')){
        paragraph.classList.add('success')
    }
})

const title = document.querySelector('h1')

titile.classList.toggle('test')
title.classList.toggle('test')