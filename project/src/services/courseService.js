import axios from 'axios'
import config from './config'

export async function getActiveCourses() {
  const url = config.BASE_URL + '/course/all-active-courses'
  const response = await axios.get(url)
  return response.data
}
