const getTodos = url => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest() //Criando construtor

request.addEventListener('readystatechange', () => {

    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    
    if (isRequestOk){
        const data = JSON.parse(request.responseText)
        resolve(data)
    }

    if(isRequestNotOk){
        reject('Não foi possível obter os dados') 
    }
})

request.open('GET', url)
request.send()

})

/*
getTodos('http://pokeapi.co/api/v2/pokemon/1')
   .then(pokemon => console.log(pokemon))
   .catch(error => console.log(error))
*/

getTodos('http://pokeapi.co/api/v2/pokemon/1')
   .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('http://pokeapi.co/api/v2/pokemon/4')
   })
   .then(charmander => {
    console.log(charmander)
    return getPokemon('http://pokeapi.co/api/v2/pokemon/7')
   })
   .then(squirtle => console.log(squirtle))
   .catch(error => console.log(error))

/*
const getData = () => {
    return new Promise((resolve, reject) => {
        resolve('Dados aqui')
        reject('Erro aqui')
    })
}

getData()
 .then(value => console.log(value))
 .catch(error => console.log(error))
 */