import { RECEIVE_FRIENDS, ADD_FRIEND, SEARCH_FRIEND } from '../actions/friends'
// TODO Please replace the static data below with the server data, use this endpoint http://localhost:3020/friends.
const initialState = {
  friends: [
    {
      id: "4f733b92-e125-11e9-81b4-2a2ae2dbcce4",
      name: "Theodore Roosevelt",
      sex: "male",
      isStared: false,
    },
    {
      id: "4f733e1c-e125-11e9-81b4-2a2ae2dbcce4",
      name: "Abraham LincolnDEFAULT",
      sex: "male",
      isStared: true,
    }
  ],
  query: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FRIENDS:
      // ask there is a better way to do this.
      return {
        ...state,
        friends: action.friends.map(({ Name, ...rest }) => ({ name: Name, ...rest }))
      }
    case ADD_FRIEND:
      // ask there is a better way to do this.
      return {
        ...state,
        friends: state.friends.concat(action.friend)
        // friends: [...state.friends, ...action.friend]
      }
    case SEARCH_FRIEND:
      // ask there is a better way to do this.
      return {
        ...state,
        query: action.query
      }
    default:
      return state
  }
};
