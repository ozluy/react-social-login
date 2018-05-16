import React from 'react'
import PropTypes from 'prop-types'
import enhancers from './enhancers'
import Button from './components/Button'

const App = ({
  loginWithFacebook,
  loginedFacebook,
  loginWithTwitter,
  loginedTwitter,
  loginWithGoogle,
  loginedGoogle,
}) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Social Login</h1>
    </header>
    <main>
      <Button success={loginedFacebook} onClick={loginWithFacebook}>
        Login with Facebook
      </Button>

      <Button success={loginedTwitter} onClick={loginWithTwitter}>
        Login with Twitter
      </Button>
      <Button success={loginedGoogle} onClick={loginWithGoogle}>
        Login with Google
      </Button>
    </main>
  </div>
)

App.propTypes = {
  loginWithFacebook: PropTypes.func.isRequired,
  loginWithTwitter: PropTypes.func.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  loginedFacebook: PropTypes.bool.isRequired,
  loginedTwitter: PropTypes.bool.isRequired,
  loginedGoogle: PropTypes.bool.isRequired,
}

export default enhancers(App)
