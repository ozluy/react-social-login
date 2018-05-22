import firebase from './firebase'
import 'firebase/auth'

const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('email')

const facebookClient = () => {
  const login = () =>
    new Promise(resolve =>
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => {
          console.log(data)
          resolve({ success: true, data })
        })
        .catch(error => {
          console.log(error)
          resolve({ success: false, error })
        })
    )
  return {
    login,
  }
}

export default facebookClient()
