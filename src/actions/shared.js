import { getFriends } from '../services/friendsApi'
import { receiveFriends } from './friends'

export const handleInitialData = () => dispatch => {
  return getFriends()
    .then(friends => {
      dispatch(receiveFriends(friends))
    })
}
