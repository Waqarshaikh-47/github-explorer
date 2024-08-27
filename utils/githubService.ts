import apiRequest from "../apiRequest"

export const fetchUserProfile = async (username:string) => {
  try {
    const res = await apiRequest.get(`/users/${username}`)
    return res.data
  } catch (err) {
     }
}

export const fetchUserRepos = async (username:string) => {
  try {
    const res = await apiRequest.get(`/users/${username}/repos`)
    return res.data
  } catch (err) {
    return []
}
}
