import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../config'

const provider = new firebase.auth.FacebookAuthProvider()
firebase.initializeApp(config.firebase)

const facebookClient = () => {
  const login = () =>
    new Promise(resolve =>
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result)
          resolve(true)
        })
        .catch(error => {
          console.log(error)
          resolve(false)
        })
    )
  return {
    login,
  }
}

export default facebookClient()
