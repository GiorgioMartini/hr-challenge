import axios from 'axios'

export const baseUrl = 'http://localhost:3020/friends'
export const addUrl = `${baseUrl}/add`

export const getFriends = async () => {
  return await axios.get(baseUrl)
    .then(({ data }) => {
      return data
    })
}

export const saveFriend = async ({ name, sex }) => {
  return await axios.post(baseUrl, {
    name,
    sex,
  })
    .then(({ data }) => {
      return data
    })
}
