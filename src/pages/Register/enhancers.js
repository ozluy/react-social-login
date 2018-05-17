import { compose, withHandlers } from 'recompose'
import facebookClient from 'api/facebookClient'
import twitterClient from 'api/twitterClient'
import googleClient from 'api/googleClient'
import instagramClient from 'api/instagramClient'
import history from 'common/history'
import { withRegister } from 'common/registerContextAPI'

export default compose(
  withRegister,
  withHandlers({
    loginWithFacebook: ({ register }) => async () => {
      const loginRequest = await facebookClient.login()
      if (loginRequest.success) {
        const dataForRegister = {
          email: loginRequest.data.additionalUserInfo.profile.email,
          firstName: loginRequest.data.additionalUserInfo.profile.first_name,
          lastName: loginRequest.data.additionalUserInfo.profile.last_name,
          accessToken: loginRequest.data.credential.accessToken,
          providerId: loginRequest.data.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithTwitter: ({ register }) => async () => {
      const loginRequest = await twitterClient.login()
      if (loginRequest.success) {
        const fullName = loginRequest.data.additionalUserInfo.profile.name.split(
          ` `
        )
        const dataForRegister = {
          email: loginRequest.data.additionalUserInfo.profile.email,
          firstName: fullName[0],
          lastName: fullName[1],
          accessToken: loginRequest.data.credential.accessToken,
          providerId: loginRequest.data.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithGoogle: ({ register }) => async () => {
      const loginRequest = await googleClient.login()
      if (loginRequest.success) {
        const dataForRegister = {
          email: loginRequest.data.additionalUserInfo.profile.email,
          firstName: loginRequest.data.additionalUserInfo.profile.given_name,
          lastName: loginRequest.data.additionalUserInfo.profile.family_name,
          accessToken: loginRequest.data.credential.accessToken,
          providerId: loginRequest.data.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithInstagram: () => () => {
      instagramClient.login()
    },
  })
)
