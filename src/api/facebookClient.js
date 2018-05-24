import firebase from './firebase'
import 'firebase/auth'

const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('email')

const facebookClient = () => {
  const login = () =>
    new Promise(resolve =>
      // eslint-disable-next-line
      FB.login(
        response => {
          if (response.status === 'connected') {
            console.log('Welcome!  Fetching your information.... ', response)
            // eslint-disable-next-line
            FB.api(
              '/me',
              { fields: 'id,first_name,last_name,picture,email' },
              data => {
                data.accessToken = response.authResponse.accessToken
                console.log(data)
                resolve({ success: true, data })
              }
            )
          } else {
            resolve({
              success: false,
              error: 'User cancelled login or did not fully authorize.',
            })
          }
        },
        { scope: 'public_profile,email' }
      )
    )
  const loginWithFirebase = () =>
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
    loginWithFirebase,
  }
}

export default facebookClient()
