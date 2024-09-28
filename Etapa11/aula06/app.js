const getPokemons = async () => {
    const bulbasaur = fetch('http://pokeapi.co/api/v2/pokemon/1')
    const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
    const squirtle = fetch('https://pokeapi.co/ap/v2/pokemon/7')

    const results = await Promise.all([bulbasaur, charmander, squirtle])
    results.forEach(async response => console.log(await response.json()))

    //console.log((await bulbasaur).json())
    //console.log((await charmander).json())
    //console.log((await squirtle).json())
}

getPokemons()

// 02

/*
try {
    console.log(oi)
} catch (error){
    if(error.name === 'ReferenceError' && error.message === 'oi is not defined'){
    const oi = 'const oi criada'
    }
}
console.log('oi')
*/

/*
const getUsers = async () => await 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
*/

/*
const getUsers = async () => await 
(await fetch('https://jsonplaceholder.typicode.com/users')json()
*/

const getUsers = async () => {
    try {
        const response = await fetch('./json/todos.json')
    
    //if (response.status !== 200)
    if(!response.ok){//ok - Propriedade que verefica o status
    //erro personalizado
    throw new Error('Não foi possível obter os dados')//Lançando um objeto de erro 
    }

    return response.json()
    //return await
    // (await fetch('./json/todoss.json'))
    // .json()
    } catch (error) {
        console.log(error.message)
    }
} 


const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

logUsers()
