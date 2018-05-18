/* eslint-disable */

const linkedInClient = {
  login: () =>
    new Promise(resolve => {
      IN.API.Raw('/people/~:(id,email-address,first-name,last-name)')
        .result(data => {
          console.log(data)
          resolve({ success: true, data })
        })
        .error(error => {
          console.log(error)
          resolve({ success: false, error })
        })
    }),
}

export default linkedInClient
