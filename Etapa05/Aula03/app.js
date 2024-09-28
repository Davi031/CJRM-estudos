const article = document.querySelector('article')

//console.log(Array.from(article.children))//Tranforma o HtmlColection para array prototype sem mudar o orignal. Assim será possível iterar em cada elemento filho.

Array.from(article.children).forEach(element => {
    element.classList.add('article-element')
})

const title = document.querySelector('h2')

//console.log(title.parentElement)//Descobrir quem é o elemento pai
console.log(title.nextElementSibling)//Descobrir o irmão próximo
console.log(title.previousElementSibling)//Irmão anteriror.