import { compose, withHandlers, withState } from 'recompose'
import facebookClient from './api/facebookClient'
import twitterClient from './api/twitterClient'
import googleClient from './api/googleClient'

export default compose(
  withState('loginedFacebook', 'changeLoginFacebook', false),
  withState('loginedTwitter', 'changeLoginTwitter', false),
  withState('loginedGoogle', 'changeLoginGoogle', false),
  withHandlers({
    loginWithFacebook: ({ changeLoginFacebook }) => async () => {
      const loginRequest = await facebookClient.login()
      if (loginRequest) {
        changeLoginFacebook(true)
      }
    },
    loginWithTwitter: ({ changeLoginTwitter }) => async () => {
      const loginRequest = await twitterClient.login()
      if (loginRequest) {
        changeLoginTwitter(true)
      }
    },
    loginWithGoogle: ({ changeLoginGoogle }) => async () => {
      const loginRequest = await googleClient.login()
      if (loginRequest) {
        changeLoginGoogle(true)
      }
    },
  })
)
