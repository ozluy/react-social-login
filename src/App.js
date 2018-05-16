import React from 'react'
import PropTypes from 'prop-types'
import enhancers from './enhancers'
import Button from './components/Button'

const App = ({ loginWithFacebook, loginedFacebook }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Social Login</h1>
    </header>
    <main>
      <Button success={loginedFacebook} onClick={loginWithFacebook}>
        Login with Facebook
      </Button>
    </main>
  </div>
)

App.propTypes = {
  loginWithFacebook: PropTypes.func.isRequired,
  loginedFacebook: PropTypes.bool.isRequired,
}

export default enhancers(App)
