import React from 'react'
import PropTypes from 'prop-types'
import enhancers from './enhancers'
import Button from 'components/Button'
import LoadingIndicator from 'components/LoadingIndicator'

const App = ({
  loginWithFacebookSDK,
  loginWithFacebook,
  loginWithTwitter,
  loginWithGoogle,
  loginWithInstagram,
  loginWithLinkedIn,
  loading,
}) => (
  <div>
    <main>
      <h1>Social Login</h1>
      <Button
        label="Login with Facebook SDK"
        data-text="Login with Facebook SDK"
        onClick={loginWithFacebookSDK}
      />
      <Button
        label="Login Facebook with Firebase"
        data-text="Login Facebook with Firebase"
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
      {loading && <LoadingIndicator />}
    </main>
  </div>
)

App.propTypes = {
  loginWithFacebookSDK: PropTypes.func.isRequired,
  loginWithFacebook: PropTypes.func.isRequired,
  loginWithTwitter: PropTypes.func.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  loginWithInstagram: PropTypes.func.isRequired,
  loginWithLinkedIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default enhancers(App)
