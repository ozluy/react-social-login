import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Input, Placeholder, Border, InputError } from './styled'

const StyledInput = props => (
  <Wrapper hasError={props.hasError}>
    <Input {...props} typed={props.value.length > 0} />
    <Border groupItem={props.groupItem} />
    <Placeholder>{props.placeHolder}</Placeholder>
    {props.hasError && <InputError>{props.errorMessage}</InputError>}
  </Wrapper>
)

StyledInput.defaultProps = {
  errorMessage: null,
  groupItem: false,
  hasError: false,
}
StyledInput.propTypes = {
  errorMessage: PropTypes.string,
  groupItem: PropTypes.bool,
  hasError: PropTypes.bool,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default StyledInput
