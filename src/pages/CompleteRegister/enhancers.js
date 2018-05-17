import { compose, lifecycle } from 'recompose'
import { withRegister } from 'common/registerContextAPI'

export default compose(
  withRegister,
  lifecycle({
    componentDidMount() {
      if (this.props.location.hash) {
        const accessToken = this.props.location.hash.split('=')[1]
        this.props.register.setRegisterData({
          accessToken,
          providerId: 'instagram.com',
        })
      }
    },
  })
)
