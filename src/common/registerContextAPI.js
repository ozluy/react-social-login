import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, compose } from 'recompose'

const RegisterContext = React.createContext({
  registerData: {},
  setRegisterData: () => {},
})

const withRegister = Component => props => (
  <RegisterContext.Consumer>
    {register => <Component {...props} register={register} />}
  </RegisterContext.Consumer>
)

const enhancers = compose(
  withState('RegisterData', 'changeRegisterData', {}),
  withHandlers({
    setRegisterData: ({ changeRegisterData, registerData }) => data => {
      changeRegisterData(Object.assign(registerData, data))
    },
  })
)

const RegisterProvider = enhancers(
  ({ registerData, setRegisterData, children }) => (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {children}
    </RegisterContext.Provider>
  )
)

RegisterProvider.defaultProps = {
  registerData: {},
  setRegisterData: null,
}

RegisterProvider.propTypes = {
  children: PropTypes.element.isRequired,
  setRegisterData: PropTypes.func,
  registerData: PropTypes.object,
}

export { RegisterProvider, withRegister }
