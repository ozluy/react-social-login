import firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.TwitterAuthProvider()

const twitterClient = () => {
  const login = () =>
    new Promise(resolve =>
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result)
          resolve({ success: true, data: result })
        })
        .catch(error => {
          console.log(error)
          resolve({ success: false, data: error })
        })
    )
  return {
    login,
  }
}

export default twitterClient()
