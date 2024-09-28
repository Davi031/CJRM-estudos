/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, addDoc, serverTimesTamp, doc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDznp60lMY15B-mk3nTLpQ2Oa3DT-NRoj0",
  authDomain: "testing-firebase-85d9a.firebaseapp.com",
  projectId: "testing-firebase-85d9a",
  storageBucket: "testing-firebase-85d9a.appspot.com",
  messagingSenderId: "1001671309801",
  appId: "1:1001671309801:web:8c73c2b8381052843d7378",
  measurementId: "G-65R6SPS3QC"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app) //Interagir com o objeto 
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const unsubscribre = onSnapshot(collectionGames, querySnapshot => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    const gamesList = querySnapshot.docs.reduce((acc, doc) => {

      const { title, developedBy, createdAt} = doc.data()
      acc += `<li data-id="${doc.id}" class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
      
        ${createdAt ? `<li>Adicionado no banco em ${createdAt.toDate()}</li>` : ''}
    
      </ul>
    
      <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
    </li>`
    
      return acc
    }, '')
    
    gamesList.innerHTML = gamesList
    
  }
})

formAddGame.addEventListener('submit', e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    //createdAt: serverTimesTamp()
  })
  .then(doc => console.log('Document criado com o ID', doc.id))
  .catch(console.log)
})

gamesList.addEventListener('click', e => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(db, 'games', idRemoveButton))
    .then(() => console.log('Game removido'))
    .catch(console.log)
  }
})

buttonUnsub.addEventListener('click', unsubscribre)

*/

// Import the functions you need from the SDKs you need

/*

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, addDoc, serverTimesTamp, doc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDznp60lMY15B-mk3nTLpQ2Oa3DT-NRoj0",
  authDomain: "testing-firebase-85d9a.firebaseapp.com",
  projectId: "testing-firebase-85d9a",
  storageBucket: "testing-firebase-85d9a.appspot.com",
  messagingSenderId: "1001671309801",
  appId: "1:1001671309801:web:8c73c2b8381052843d7378",
  measurementId: "G-65R6SPS3QC"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app) //Interagir com o objeto 
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const getFormattedDate = createdAt => new Intl
.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
.format(createdAt.toDate())

const renderGameList = querySnapshot => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    const gamesList = querySnapshot.docs.reduce((acc, doc) => {
      const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]

      return `${acc}<li data-id="${id}" class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
      
        ${createdAt ? `<li>Adicionado no banco em ${getFormattedDate(createdAt)}</li>` : ''}
    
      </ul>
    
      <button data-remove="${id}" class="btn btn-danger btn-sm">Remover</button>
    </li>`

    }, '')
    
    gamesList.innerHTML = gamesList
  }
}

const to = promise => promise
.then(result => [null, result])
.catch(error => [error])

const addGame = async e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    //createdAt: serverTimesTamp()
  })
 
  const [error, doc] = await to(addDoc(collectionGames, {
    title: e.target.title.value,
    devolopedBy: e.target.developer.value,
    createdAt: serverTimesTamp()
  }))

  if (error){
    console.log(error)
    return
  }

  console.log('Document criado com o ID', doc.id)
  e.target.reset()
  e.target.title.focus()
}

formAddGame.addEventListener('submit', addGame)

const deleteGame = async e => {
  const idRemoveButton = e.target.dataset.remove

  if (!idRemoveButton) {
    return
  }

  const [error] = await to(deleteDoc(doc(db, 'games', idRemoveButton)))

  if(error) {
    console.log(error)
    return
  }

  console.log('Game removido')

  /*
  try {
    await deleteDoc(doc(db, 'games', idRemoveButton))
    console.log('Game removido')
  } catch (e) {
    console.log(e)
  } // retrun early - Resultado esperado só seja executado no fim da função caso nenhum imprevisto aconteça 
  
}

const handleSnapshotError = e => console.log(e)

const unsubscribre = onSnapshot(collectionGames, renderGameList, handleSnapshotError)

gamesList.addEventListener('click', deleteGame)

buttonUnsub.addEventListener('click', unsubscribre)

*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, addDoc, serverTimesTamp, doc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDznp60lMY15B-mk3nTLpQ2Oa3DT-NRoj0",
  authDomain: "testing-firebase-85d9a.firebaseapp.com",
  projectId: "testing-firebase-85d9a",
  storageBucket: "testing-firebase-85d9a.appspot.com",
  messagingSenderId: "1001671309801",
  appId: "1:1001671309801:web:8c73c2b8381052843d7378",
  measurementId: "G-65R6SPS3QC"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app) //Interagir com o objeto 
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const getFormattedDate = createdAt => new Intl
.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
.format(createdAt.toDate())

const sanitize = string => DOMPurify.sanitize(string)

const renderGame = (docChange) => {
  const [id, { title, developedBy, createdAt }] = [docChange.doc.id, doc.data()]
  
  const liGame = document.createElement('li')
  liGame.setAttribute('data-id', id)
  liGame.setAttribute('class', 'my-4')

  const h5 = document.createElement('h5')
  h5.textContent = sanitize(title)

  const ul = document.createElement('ul')

  const liDevopedBy = document.createElement('li')
  liDevopedBy.textContent = `Desenvolvido por ${sanitize(developedBy)}`

  if(createdAt) {
    const liDate = document.createElement('li')
    liDate.textContent = `Adicionado no banco em ${getFormattedDate(createdAt)}`
    ul.append(liDate)
  }

  const button = document.querySelector('button')
  button.textContent = 'Remover'
  button.setAttribute('data-remove', id)
  button.setAttribute('class', 'btn btn-danger btn-sm')

  ul.append(liDevopedBy)

  liGame.append(h5, ul, button)
  gamesList.append(liGame)
}



const renderGameList = snapshot => {
  //gamesList.innerHTML = '' Limpar documents da aplicação

  if(!onSnapshot.metadata.hasPendingWrites) {
    return
  }
    snapshot.docChanges().forEach(docChange => {
      if (docChange.type === 'removed') {
      const liGame = document.querySelector(`[data-id="${docChange.doc.id}"]`)
      liGame.remove()
      return
      }

      renderGame(docChange)

    })
  }




const to = promise => promise
.then(result => [null, result])
.catch(error => [error])

const addGame = async e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    //createdAt: serverTimesTamp()
  })
 
  const [error, doc] = await to(addDoc(collectionGames, {
    title: sanitize(e.target.title.value),
    devolopedBy: sanitize(e.target.developer.value),
    createdAt: serverTimesTamp()
  }))

  if (error){
    console.log(error)
    return
  }

  console.log('Document criado com o ID', doc.id)
  e.target.reset()
  e.target.title.focus()
}

formAddGame.addEventListener('submit', addGame)

const deleteGame = async e => {
  const idRemoveButton = e.target.dataset.remove

  if (!idRemoveButton) {
    return
  }

  const [error] = await to(deleteDoc(doc(db, 'games', idRemoveButton)))

  if(error) {
    console.log(error)
    return
  }

  console.log('Game removido')

  /*
  try {
    await deleteDoc(doc(db, 'games', idRemoveButton))
    console.log('Game removido')
  } catch (e) {
    console.log(e)
  } // retrun early - Resultado esperado só seja executado no fim da função caso nenhum imprevisto aconteça 
  */
}

const handleSnapshotError = e => console.log(e)

const unsubscribre = onSnapshot(collectionGames, renderGameList, handleSnapshotError)

gamesList.addEventListener('click', deleteGame)

buttonUnsub.addEventListener('click', unsubscribre)