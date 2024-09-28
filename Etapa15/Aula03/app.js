/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDo1WqtXX7tWTqK2Xl8NidxGv-MnyfZgpE",
    authDomain: "fir-auth-91bf5.firebaseapp.com",
    projectId: "fir-auth-91bf5",
    storageBucket: "fir-auth-91bf5.appspot.com",
    messagingSenderId: "1053762791630",
    appId: "1:1053762791630:web:69634f788e32c29286089f",
    measurementId: "G-XXJ89HZ582"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const collectionPhrases = collection(db, 'phrases')

  const phrasesContainer = document.querySelector('[data-js="phrases-container"]')

  const phrasesList = document.querySelector('[data-js="phrases-list"]')

const user = {}

const addPhrase = async (e, user) => {
    e.preventDefault()
    /*
    - Obter valores dos inputs
    - Sanitizar valores
    - Criar banco no firebase
    - Adicionar frase no banco
    - Limpar inputs
    - Fechar modal
    */
/*
    try {
        await addDoc(collectionPhrases, {
            movieTitle: DOMPurify.sanitize(e.target.title.value), 
            phrase: DOMPurify.sanitize(e.target.phrase.value),
            userId: DOMPurify.sanitize(user.uid)   
        })

        e.target.reset()

        const modalAddPhrase = document.querySelectorAll('[data-modal="add-phrases"]')
        M.Modal.getInstance(modalAddPhrase).close()

    } catch (error) {
        console.log('Problema na adição do document:', error)
    }
}

const initCollapsibles = collapsibles => M.collasible.init(collapsibles)

const login = async () => {
    try {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)  

    } catch (error) {
        console.log('login error:', error)
    }  
}

const logout = async unsubscribe => {
    try {
        await signOut(auth)
        unsubscribe()
        console.log('usuário foi deslogado')
    } catch (error) {
        console.log('logout error:', error)
    }
}

const handleAuthStateChanged = async user => {
    
    try { 
        const result = await getRedirectResult(auth)
        console.log('result:', result)

    } catch {
        console.log('erro em getRedirectResult:, error')
    }
    
    const lis = [...document.querySelector('[data-js="nav-ul"]').children]

    lis.forEach(li => {
        const liShouldBeVisible = li.dataset.js.includes(user ? 'logged-in' : 'logged-out')

        if (liShouldBeVisible) {
            li.classList.remove('hide')
            return
        }

        li.classList.add('hide')
    })

    const loginMessageExists = document.querySelector('[data-js="login-message"]')
    const formAddPhrase = document.querySelector('[data-js="add-phrase-form"]')
    const buttonGoogle = document.querySelector('[data-js="button-googl"]')
    const linkLogout = document.querySelector('[data-js="logout"]')
    const accountDetailsContainer = document.querySelector('[data-js="account-details"]')
    const accountDetails = document.createElement('p')

    /*
    if (loginMessageExists) {
        loginMessageExists.remove()
    }
    */

    //Optinal chaning
/*
    loginMessageExists?.remove()

    if (!user) {
        const loginMassage = document.createElement('h5')

        loginMassage.textContent = 'Faça login para ver as frases'
        loginMassage.classList.add('center-align', 'white-text')
        loginMassage.setAttribute('data-js', 'login-message')
        phrasesContainer.append(loginMassage)

        formAddPhrase.onsubmit = null
        phrasesList.innerHTML = ''
        accountDetailsContainer.innerHTML = ''
        buttonGoogle.addEventListener('click', login)
        linkLogout.onclick = null
        return
    }

    try {
        const userDocRef = doc(db, 'users', user.id)
        const docSnapshot = await getDoc(userDocRef)

        if (!docSnapshot.exists()) {
            await setDoc(userDocRef, {
                name: DOMPurify.sanitize(user.displayName),
                email: DOMPurify.sanitize(user.email), 
                userId: DOMPurify.sanitize(user.uid) 
            })
        }
    } catch (error) {
        console.log('Erro ao tentar registrar usuário:', error)
    }

    buttonGoogle.removeEventListener('click', login)
    formAddPhrase.onsubmit = e => addPhrase(e, user)

    const queryPhrases = query(collectionPhrases, where('userId', '==', user.id))
   
    const unsubscribe = onSnapshot(queryPhrases, snapShot => {
        snapShot.docChanges().forEach(docChanges => {
            const liPhrase = document.createElement('li')
            const movieTitleContainer = document.createElement('div')
            const phrasesContainer = document.createElement('div')
            const { movieTitle, phrase } = docChanges.doc.data()

            movieTitleContainer.textContent = DOMPurify.sanitize(movieTitle)
            phrasesContainer.textContent = DOMPurify.sanitize(phrase)
            movieTitleContainer.setAttribute('class', 'collapsible-header blue-grey-text text-lighten-5 blue-grey darken-4')
            phrasesContainer.setAttribute('class', 'collapsible-body blue-grey-text text-lighten-5 blue-grey darken-3')

            liPhrase.append(movieTitleContainer, phrasesContainer)
            DocumentFragment.append(liPhrase)
        })

        phrasesList.append(DocumentFragment)
    })
    initCollapsibles(phrasesList) 
    accountDetailsContainer.append(accountDetails)
    accountDetails.textContent = DOMPurify.sanitize(`${user.displayName} | ${user.email}`)
    linkLogout.onclick = () => logout(unsubscribe)
}

const initModals = () => {
    const modals = document.querySelectorAll('[data-js="modal"]')
    M.Modal.init(modals)
}

onAuthStateChanged(auth, showApproprieatedNavLinks)

initModals()
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"


const formAddPhrase = document.querySelector('[data-js="add-phrase-form"]')
    const buttonGoogle = document.querySelector('[data-js="button-googl"]')
    const linkLogout = document.querySelector('[data-js="logout"]')
    const accountDetailsContainer = document.querySelector('[data-js="account-details"]')
    const accountDetails = document.createElement('p')

const firebaseConfig = {
    apiKey: "AIzaSyDo1WqtXX7tWTqK2Xl8NidxGv-MnyfZgpE",
    authDomain: "fir-auth-91bf5.firebaseapp.com",
    projectId: "fir-auth-91bf5",
    storageBucket: "fir-auth-91bf5.appspot.com",
    messagingSenderId: "1053762791630",
    appId: "1:1053762791630:web:69634f788e32c29286089f",
    measurementId: "G-XXJ89HZ582"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const collectionPhrases = collection(db, 'phrases')

  const phrasesContainer = document.querySelector('[data-js="phrases-container"]')
  const phrasesList = document.querySelector('[data-js="phrases-list"]')

  const closeModalAddPhrase = () => {
    const modalAddPhrase = document.querySelectorAll('[data-modal="add-phrases"]')
    M.Modal.getInstance(modalAddPhrase).close()
  }

const to = promise => promise
.then(result => [null, result])
.cathc(error => [error])

const addPhrase = async (e, user) => {
    e.preventDefault()

    const [error] = await to(addDoc(collectionPhrases, {
        movieTitle: DOMPurify.sanitize(e.target.title.value), 
        phrase: DOMPurify.sanitize(e.target.phrase.value),
        userId: user.uid
    }))

    if(error) {
      console.log('Problema na adição do document:', error)
    }

    e.target.reset()
    closeModalAddPhrase()
}

const initCollapsibles = collapsibles => M.collasible.init(collapsibles)

const login = async () => {
    try {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)  

    } catch (error) {
        console.log('login error:', error)
    }  
}

const logout = async unsubscribe => {
    try {
        await signOut(auth)
        unsubscribe()
        console.log('usuário foi deslogado')
    } catch (error) {
        console.log('logout error:', error)
    }
}

const handleRedirectResult = async () => {
    try { 
        const result = await getRedirectResult(auth)
        console.log('result:', result)
    } catch {
        console.log('erro em getRedirectResult:, error')
    }
}

const renderLinks = ({ userExists }) => {
    const lis = [...document.querySelector('[data-js="nav-ul"]').children]

    lis.forEach(li => {
        const liShouldBeVisible = li.dataset.js.includes(userExists ? 'logged-in' : 'logged-out')

        if (liShouldBeVisible) {
            li.classList.remove('hide')
            return
        }

        li.classList.add('hide')
    })
}

const removeLoginMessage = () => {
    const loginMessageExists = document.querySelector('[data-js="login-message"]')
    loginMessageExists?.remove()
}

const handleAnonymousUser = () => {
    const loginMassage = document.createElement('h5')

        loginMassage.textContent = 'Faça login para ver as frases'
        loginMassage.classList.add('center-align', 'white-text')
        loginMassage.setAttribute('data-js', 'login-message')
        phrasesContainer.append(loginMassage)

        formAddPhrase.onsubmit = null
        phrasesList.innerHTML = ''
        accountDetailsContainer.innerHTML = ''
        buttonGoogle.addEventListener('click', login)
        linkLogout.onclick = null
}

const createUserDocument = async user => {
    try {
        const userDocRef = doc(db, 'users', user.id)
        const docSnapshot = await getDoc(userDocRef)

        if (!docSnapshot.exists()) {
            await setDoc(userDocRef, {
                name: user.displayName,
                email: user.email,   
                userId: user.uid   
            })
        }
    } catch (error) {
        console.log('Erro ao tentar registrar usuário:', error)
    }
}

const renderPhrases = (user) => {
    const queryPhrases = query(collectionPhrases, where('userId', '==', user.id))
    return onSnapshot(queryPhrases, snapShot => {
        snapShot.docChanges().forEach(docChanges => {
            const liPhrase = document.createElement('li')
            const movieTitleContainer = document.createElement('div')
            const phrasesContainer = document.createElement('div')
            const { movieTitle, phrase } = docChanges.doc.data()

            movieTitleContainer.textContent = DOMPurify.sanitize(movieTitle)
            phrasesContainer.textContent = DOMPurify.sanitize(phrase)
            movieTitleContainer.setAttribute('class', 'collapsible-header blue-grey-text text-lighten-5 blue-grey darken-4')
            phrasesContainer.setAttribute('class', 'collapsible-body blue-grey-text text-lighten-5 blue-grey darken-3')

            liPhrase.append(movieTitleContainer, phrasesContainer)
            DocumentFragment.append(liPhrase)
        })

        phrasesList.append(DocumentFragment)
    })
}

const handleSignedUser = async (user) => {
    createUserDocument(user)
    buttonGoogle.removeEventListener('click', login)
    formAddPhrase.onsubmit = e => addPhrase(e, user)

    const unsubscribe = renderPhrases(user)

    initCollapsibles(phrasesList) 
    accountDetailsContainer.append(accountDetails)
    accountDetails.textContent = DOMPurify.sanitize(`${user.displayName} | ${user.email}`)
    linkLogout.onclick = () => logout(unsubscribe)
}

const handleAuthStateChanged = async user => {
    
    handleRedirectResult()
    renderLinks({ userExists: !!user })
    removeLoginMessage() 
   
    if (!user) {
        return handleAnonymousUser()
    }

    handleSignedUser({
        displayName: DOMPurify.sanitize(user.displayName),
        email: DOMPurify.sanitize(user.email),
        uid: DOMPurify.sanitize(user.uid)
    })
}

const initModals = () => {
    const modals = document.querySelectorAll('[data-js="modal"]')
    M.Modal.init(modals)
}

onAuthStateChanged(auth, handleAuthStateChanged)

initModals()