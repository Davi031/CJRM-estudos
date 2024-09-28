//const button = document.querySelector('button')

//button.addEventListener('click', () => {
//    console.log('Clicou no botão!')
//})

const ul = document.querySelector('ul')

// ul.remove()


const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')//Cria elemento

    li.textContent = 'Novo item'//Recebe o Conteúdo do texto do elemento criado
    ul.prepend(li)//Adiciona à ul no inicío
    //ul.append(li)
})

//const lis = document.querySelectorAll('li')

//lis.forEach(li => {
//    li.addEventListener('click', event => {
//        const clickElement = event.target
//        
//        event.stopPropagation()
//       clickElement.remove()
//    })
//})

ul.addEventListener('click', event => {
    const clickedElement = event.target

    if(clickedElement.tagName === 'LI'){
        clickedElement.remove()
    }
})

