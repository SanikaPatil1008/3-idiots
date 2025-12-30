import axios from 'axios'
import config from './config'

export async function loginUser(email, password) {
  const url = config.BASE_URL + '/student/login'
  const body = { email, password }

  const response = await axios.post(url, body)
  return response.data
}
