import { compose, lifecycle } from 'recompose'
import { withRegister } from 'common/registerContextAPI'
import history from 'common/history'

export default compose(
  withRegister,
  lifecycle({
    componentDidMount() {
      if (!this.props.register.registerData.accessToken) {
        history.push('/')
      }
    },
  })
)
