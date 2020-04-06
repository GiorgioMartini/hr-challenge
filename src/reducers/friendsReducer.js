import { RECEIVE_FRIENDS } from '../actions/friends'
// TODO Please replace the static data below with the server data, use this endpoint http://localhost:3020/friends.
const friends = [
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
];

export default (state = { friends }, action) => {
  switch (action.type) {
    case RECEIVE_FRIENDS:
      // ask there is a better way to do this.
      return {
        ...state,
        friends: action.friends.map(({ Name, ...rest }) => ({ name: Name, ...rest }))
      }
    default:
      return state
  }
};
