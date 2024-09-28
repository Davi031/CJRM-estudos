/* 
#Destructing

Tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura

* Object 
- Renomeando propriedades
- Colocando em variáveis existentes

*Array
- 2 valores
- Desconsiderando itens
- ...rest

*Function
*/

const pessoa = {
    name: "Elton",
    age: 26
}

//const { age } = pessoa

//const { age:idade } = pessoa
//console.log(idade)

const fruits = ["banana", "pera", "uva"]

const [banana, pera] = fruits

//function liquidificador({ uva }) {
//    console.log(uva)
//}

//const Paradisefruits = {
//    banana: "banana",
//    pera: "pera",
//    uva:"uva"
//}

//liquidificador(fruits)

function liquidificador([f1, ...rest]){
    console.log(rest)
}

liquidificador(["banana", "pera"])

//Criação do button por callback

function newButton(text, callback) {
    const body = document.querySelector("body")
    const button = document.createElement("button")
    button.textContent = text

    callback(button)

    body.insertAdjacentElement("beforeend", button);

    return button
}

newButton("login", (button) => {
    button.style.cssText = `
     font-size: 40px;
    `;

    button.addEventListener('click' , () => {
        console.log('clicado')
    })
});

newButton("Signup", (button) => {
    button.style.cssText = `
    font-size: 80px;
    color:  red;
    `;

    button.addEventListener('click' , () => {
        console.log('clicado')
    })
})
