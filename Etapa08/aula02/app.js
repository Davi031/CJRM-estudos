// exemplo 1: ordenando Strings
const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

//console.log(names)

//Exemplo 2: Ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((score1, score2) => score2 - score1)//Decrescente
scores.sort((score1, score2) => score1 - score2)//Crscente

console.log(scores)

//Exemplo 3: Ordenando objetos

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
  ]

theBigFamily.sort((item1, item2) => {
    if(item1.score > item2.score) {
        return -1
    } else if(item2.score > item1.score) {
    return 1
}

return 0
})

//Modelo 2
theBigFamily.sort((item1, item2) => item2.score - item1.score)

//Encadeando métodos

const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
  ]

const booksOnSale = books.filter(({ price }) => price > 20)
.map(({ name, price}) => `O preco do livro "${name}" caiu para ${price} reais`) //Convenção de cada método fica em uma linha.