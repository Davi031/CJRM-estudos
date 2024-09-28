/*
class Student { 
    constructor (name, email) {
        this.name = name
        this.email = email
    }

    comment () { //Classes fazer atribuição ao prototype dos objetos automaticamente, então não é preciso declara-los diretamento no prototype dos objetos como é usado com funções construtoras
        return `${this.name} comentou`
    }

    static formatToDataBase (aString) { 
    return aString.toUpperCase().replaceAll(' ', '_')
}
}


function Student (name, email) {
    this.name = name
    this.email = email

    
    //this.login = function () { // Esse método será declarado em cada novo ovjeto em que a função contruora /criar
    //    return `${this.name} fez login`
    //}
    
}

Student.prototype.login = function login() { //Colocando no prototype
    return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
    return `${this.name} comentou`
}

Student.formatToDataBase = function formatToDataBase (aString) { //Método estático. É declarado na função contrutora.
    return aString.toUpperCase().replaceAll(' ', '_')
}


const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')


console.log(gabrielFialho.comment(), brenoLemos.comment())
console.log(gabrielFialho.comment === brenoLemos.comment) //Refrenciam o mesmo objeto (Student)
console.dir(gabrielFialho, brenoLemos)
//
*/

function Student(name, email) {
    this.name = name
    this.email = email
}

Student.prototype.login = function login() {  
    return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
    return `${this.name} comentou`
}

Student.formatToDataBase = function formatToDataBase(aString) { 
    return aString.toUpperCase().replaceAll(' ', '_')
}

function TeacherAssistant (name, email, scheduledWeekPosts) { 
    Student.call(this, name, email) // "Herdando" propriedades do Student
    this.scheduledWeekPosts = scheduledWeekPosts //Propriedade unica desse objeto
}

TeacherAssistant.prototype = Object.create(Student.prototype) // Essa invocação criará um novo objeto que contém as propriedades do prototype dos objetos que a Student cria. Ter acesso aos métodos do Student que estão dentro do prototype dele.

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }){ 
    return `${this.name} deu uma medalha para ${name}`
}
 
const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')
const arthurSouza = new TeacherAssistant('Arthur Souza', 'arthursouza@rogermelo.com.br', false)

console.log(gabrielFialho.comment(), brenoLemos.comment())

//Factory Function

class User {
    #counter = 0 //Privando propriedade na classe

    constructor (name, email) {
        this.name = name 
        this.email = email
    }

    incrementCounter () {
        return ++this.#counter
    }
}

const createUser = (name, email) => {
    let counter = 0 //Privando propriedade na factory function

    return{
        name,
        email,
        incrementCounter: () => ++counter //Método
    }
}

const user = new User('Roger', 'oi@rogermelo.com.br')
const user2 = createUser('Roger', 'oi@rogermelo.com.br')
const user3 = createUser('Roger 2', 'oi2@rogermelo.com.br')

console.log(user, user2)
console.log(user.incrementCounter())
console.log(user.incrementCounter())
console.log(user2.incrementCounter())
console.log(user2.incrementCounter())
console.log(user3.incrementCounter())
console.log(user3.incrementCounter())
