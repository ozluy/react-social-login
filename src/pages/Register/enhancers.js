import { compose, withHandlers } from 'recompose'
import facebookClient from 'api/facebookClient'
import twitterClient from 'api/twitterClient'
import googleClient from 'api/googleClient'
import instagramClient from 'api/instagramClient'
import linkedInClient from 'api/linkedInClient'
import history from 'common/history'
import { withRegister } from 'common/registerContextAPI'

export default compose(
  withRegister,
  withHandlers({
    loginWithFacebook: ({ register }) => async () => {
      const loginRequest = await facebookClient.login()
      if (loginRequest.success) {
        const facebookData = loginRequest.data
        const dataForRegister = {
          email: facebookData.additionalUserInfo.profile.email,
          firstName: facebookData.additionalUserInfo.profile.first_name,
          lastName: facebookData.additionalUserInfo.profile.last_name,
          accessToken: facebookData.credential.accessToken,
          providerId: facebookData.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithTwitter: ({ register }) => async () => {
      const loginRequest = await twitterClient.login()
      if (loginRequest.success) {
        const twitterData = loginRequest.data
        const fullName = twitterData.additionalUserInfo.profile.name.split(` `)
        const dataForRegister = {
          email: twitterData.additionalUserInfo.profile.email,
          firstName: fullName[0],
          lastName: fullName[1],
          accessToken: twitterData.credential.accessToken,
          providerId: twitterData.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithGoogle: ({ register }) => async () => {
      const loginRequest = await googleClient.login()
      if (loginRequest.success) {
        const googleData = loginRequest.data
        const dataForRegister = {
          email: googleData.additionalUserInfo.profile.email,
          firstName: googleData.additionalUserInfo.profile.given_name,
          lastName: googleData.additionalUserInfo.profile.family_name,
          accessToken: googleData.credential.accessToken,
          providerId: googleData.credential.providerId,
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
    loginWithInstagram: () => () => {
      instagramClient.login()
    },
    loginWithLinkedIn: ({ register }) => async () => {
      const loginRequest = await linkedInClient.login()
      if (loginRequest.success) {
        const linkedInData = loginRequest.data
        const dataForRegister = {
          email: linkedInData.emailAddress,
          firstName: linkedInData.firstName,
          lastName: linkedInData.lastName,
          accessToken: linkedInData.id,
          providerId: 'linkedin.com',
        }
        register.setRegisterData(dataForRegister)
        history.push('/complete-register')
      }
    },
  })
)
