const user = {
    name: 'Roger',
    email: 'oi@rogermelo.com.br',
    login: () => 'O usuário logou',
    logout: () => 'O usuário deslogou'
}

const user2 = { //Declarando uma cópia literal
    ...user, //Copiando name e login e logout
    name: 'Paulo Herinque', //Sobreescrevendo email de user
    email: 'ph@rogermelo.com.br'
}

const user3 = new User('Carolos', 'carlos@gmail.com')

//Como fazer a cópia de objetos de maneira mais dinâmica?

class User {
    constructor (name, email) {
        this.name = name
        this.email = email
        this.points = 0
    }

    login () {
        //return `${this.name} logou na aplicação`
        console.log(`${this.name} logou na aplicação`)
        return this //o this Dentro da classe representa o objeto que a classe está criando.
    }

    logout () {
        return `${this.name} deslogou da aplicação`
    }

    addPoint () {
        this.points++
        return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
    }
}

const usuario = new User('Roger', 'oi@rogermelo.com.br')
const usuario2 = new User('Paulo Henrique', 'ph@rogermelo.com.br')

user.login().addPoint()

console.log(user, user2)

//Herança - Uma subclasse herde propriedade e métodos de uma outra classe

class Mammal {
    constructor (species, name, age){
        this.species = species
        this.name = name
        this.age = age
        this.mammaryGland = true
    }

    incrementAge () {
        this.age++
    }
}

class Lion extends Mammal {
    constructor (species, name, age, manEater){
        super(species, name, age) //setando as propriedades do objeto pai através da chave super
        this.manEater = manEater
    }
    eatZebras (animals) {
        return animals.filter(animal => animal.species !== 'zebra')
    }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('cavalo', 'Angus', 3)

const animals = [zeca, pompeu, angus]

console.log(mufasa.eatZebras(animals))

