import React from 'react'
import PropTypes from 'prop-types'
import enhancers from './enhancers'
import Button from 'components/Button'

const App = ({
  loginWithFacebook,
  loginWithTwitter,
  loginWithGoogle,
  loginWithInstagram,
  loginWithLinkedIn,
}) => (
  <div>
    <main>
      <h1>Social Login</h1>
      <Button
        label="Login with Facebook"
        data-text="Login with Facebook"
        onClick={loginWithFacebook}
      />
      <Button
        label="Login with Twitter"
        data-text="Login with Twitter"
        onClick={loginWithTwitter}
      />
      <Button
        label="Login with Google"
        data-text="Login with Google"
        onClick={loginWithGoogle}
      />
      <Button
        label="Login with Instagram"
        data-text="Login with Instagram"
        onClick={loginWithInstagram}
      />
      <Button
        label="Login with LinkedIn"
        data-text="Login with LinkedIn"
        onClick={loginWithLinkedIn}
      />
    </main>
  </div>
)

App.propTypes = {
  loginWithFacebook: PropTypes.func.isRequired,
  loginWithTwitter: PropTypes.func.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  loginWithInstagram: PropTypes.func.isRequired,
  loginWithLinkedIn: PropTypes.func.isRequired,
}

export default enhancers(App)
