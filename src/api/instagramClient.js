import config from '../config'

const instagramClient = {
  login: () => {
    window.open(
      `https://api.instagram.com/oauth/authorize/?client_id=${
        config.instagram.clientId
      }&redirect_uri=${config.instagram.redirectUri}&response_type=${
        config.instagram.responseType
      }`,
      '_self'
    )
  },
  getUserData: accessToken =>
    new Promise(resolve => {
      fetch(
        `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`
      )
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error(response.statusText)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          resolve({ success: true, data })
        })
        .catch(error => {
          console.log(error)
          resolve({ success: false, error })
        })
    }),
}

export default instagramClient
