import { compose, withHandlers, withState } from 'recompose'
import facebookClient from './api/facebookClient'
import twitterClient from './api/twitterClient'

export default compose(
  withState('loginedFacebook', 'changeLoginFacebook', false),
  withState('loginedTwitter', 'changeLoginTwitter', false),
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
  })
)
