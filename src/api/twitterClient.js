import firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.TwitterAuthProvider()

const twitterClient = () => {
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

export default twitterClient()
