import { RECEIVE_FRIENDS, ADD_FRIEND, SEARCH_FRIEND, FILTER_FRIENDS, RESET_FILTER, SORT_FRIENDS } from '../actions/friends'
// TODO Please replace the static data below with the server data, use this endpoint http://localhost:3020/friends.
const initialState = {
  friends: [
    {
      id: "4f733b92-e125-11e9-81b4-2a2ae2dbcce4",
      Name: "Theodore Roosevelt",
      sex: "male",
      isStared: false,
    },
    {
      id: "4f733e1c-e125-11e9-81b4-2a2ae2dbcce4",
      Name: "Abraham LincolnDEFAULT",
      sex: "male",
      isStared: true,
    }
  ],
  query: '',
  filterQuery: '',
  filteredFriends: [],
  sortedFriends: [],
  sortingRule: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FRIENDS:
      // ask there is a better way to do this.
      return {
        ...state,
        friends: action.friends/*.map(({ Name, ...rest }) => ({ name: Name, ...rest }))*/
      }
    case ADD_FRIEND:
      return {
        ...state,
        friends: state.friends.concat(action.friend)
      }
    case SEARCH_FRIEND:
      return {
        ...state,
        query: action.query
      }
    case FILTER_FRIENDS:
      let formatedRules = {}
      const rules = action.filterQuery

      for (const prop in rules) {
        formatedRules[prop] = prop === 'isStared'
          ? rules[prop] === 'true' ? true : false
          : formatedRules[prop] = rules[prop]
      }

      const result = state.friends.filter(item =>
        Object.entries(formatedRules).every(([k, v]) =>
          item[k] === v
        )
      )

      return {
        ...state,
        filteredFriends: result,
      }
    case RESET_FILTER:
      return {
        ...state,
        filteredFriends: state.friends,
      }
    case SORT_FRIENDS:
      const sortObjectsAlphabetically = (array, prop) => [...array].sort((a, b) => {
        if (a[prop] < b[prop]) return -1
        if (a[prop] > b[prop]) return 1
        return 0;
      })

      const sortedFriends = action.sortingRule === 'Name'
        ? sortObjectsAlphabetically(state.friends, 'Name')
        : [...state.friends].sort((a, b) => a.id.localeCompare(b.id))

      // const sortedFriends = sortObjectsAlphabetically(state.friends, 'Name')

      return {
        ...state,
        filteredFriends: sortedFriends,
      }
    default:
      return state
  }
};
