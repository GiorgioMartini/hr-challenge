import { saveFriend } from '../services/friendsApi'
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const ADD_FRIEND = 'ADD_FRIEND'
export const SEARCH_FRIEND = 'SEARCH_FRIEND'
export const FILTER_FRIENDS = 'FILTER_FRIENDS'
export const RESET_FILTER = 'FILTER_FRIENDS'

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends,
})

export const addFriend = (friend) => ({
  type: ADD_FRIEND,
  friend,
})

export const handleAddFriend = (friendData) => async dispatch => {
  const friend = await saveFriend(friendData)
  dispatch(addFriend(friend))
}

export const searchFriend = (query) => ({
  type: SEARCH_FRIEND,
  query,
})

export const filterFriends = (filterQuery) => ({
  type: FILTER_FRIENDS,
  filterQuery,
})

export const resetFilter = () => ({
  type: RESET_FILTER,
})
