const getTodos = (url, callback) => {
    const request = new XMLHttpRequest() //Criando construtor

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        callback(null, data)//null para error e request para data dos argumentos da função getTodos
        return
    }

    if(request.readyState === 4){
        callback('Não foi possível obter os dados', null) //error frase e null os dados
    }
})

request.open('GET', url)
request.send()

}

getTodos('./json/todos.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-02.json', (error, data) => {
        console.log(data)
    })
    getTodos('./json/todos-03.json', (error, data) => {
        console.log(data)
    })
})
