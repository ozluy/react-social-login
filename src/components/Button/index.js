import React from 'react'
import { Button, Text, Overlay } from './styled'
import PropTypes from 'prop-types'

const StyledButton = props => (
  <Button secondary={props.secondary} {...props}>
    <Overlay />
    <Text>{props.label}</Text>
  </Button>
)

StyledButton.defaultProps = {
  secondary: false,
}

StyledButton.propTypes = {
  label: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
}

export default StyledButton
