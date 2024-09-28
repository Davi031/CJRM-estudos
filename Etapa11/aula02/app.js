const request = new XMLHttpRequest() //Criando construtor

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()