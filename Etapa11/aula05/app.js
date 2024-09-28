fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log('Response', response)
    return response.json() //retorno com conversão
})
.then(users => console.log(users))//Encadeando then para manipular os dados obtidos no response / exibir os dados
.catch(error => console.log(error))


// ASYNC AWAIT

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') // Realizando uma promise, portanto o uso do await
    //const users = await response.json()//Também realizando uma promise
    return await response.json()
    //return users
}

const logUsers = async() => { //Manipulando getUsers
    const users = await getUsers()
    console.log(users)
}

console.log(1)
console.log(2)

logUsers()

console.log(3)
console.log(4)

getUsers()
