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
}

export default instagramClient
