let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPost: ['Empadão de Frango', '4 receitas de purê de batata'],
    login: function() {
        console.log('Usuário logado')
    },
    logout () {
        console.log('Usuário deslogado')
    },
    logBlogPosts () { //shortcut
        console.log(`${this.name}escreveu os seguintes posts:`)

        this.blogPost.forEach(post => {
            console.log(post)
        })
    }
}

user.logBlogPosts()

