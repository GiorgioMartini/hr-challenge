import axios from 'axios'

export const baseUrl = 'http://localhost:3020/friends'

export const getFriends = async () => {
  return await axios.get(baseUrl)
    .then(({ data }) => {
      // debugger
      return data
    })
}
