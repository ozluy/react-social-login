import firebase from 'firebase/app'

import config from '../config'

firebase.initializeApp(config.firebase)
export default firebase
