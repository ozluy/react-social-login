/* eslint-disable */

const loadProfileData = resolve => {
  IN.API.Raw('/people/~:(id,email-address,first-name,last-name,picture-url)')
    .result(data => {
      console.log(data)
      resolve({ success: true, data })
    })
    .error(error => {
      console.log(error)
      resolve({ success: false, error })
    })
}
const linkedInClient = {
  login: () =>
    new Promise(resolve => {
      if (!IN.User.isAuthorized()) {
        IN.User.authorize(() => {
          loadProfileData(resolve)
        })
      } else {
        loadProfileData(resolve)
      }
    }),
}

export default linkedInClient
