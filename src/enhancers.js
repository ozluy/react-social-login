import { compose, withHandlers, withState } from 'recompose'
import facebookClient from './api/facebookClient'

export default compose(
  withState('loginedFacebook', 'changeLoginFacebook', false),
  withHandlers({
    loginWithFacebook: ({ changeLoginFacebook }) => async () => {
      const loginRequest = await facebookClient.login()
      if (loginRequest) {
        changeLoginFacebook(true)
      }
    },
  })
)
