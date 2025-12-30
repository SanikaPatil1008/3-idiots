import axios from 'axios'
import config from './config'

export async function registerToCourse(data) {
  const url = config.BASE_URL + '/student/register-to-course'
  const response = await axios.post(url, data)
  return response.data
}

export async function getMyCourses(token) {
  const url = config.BASE_URL + '/student/my-courses'
  const headers = { token }
  const response = await axios.get(url, { headers })
  return response.data
}

export async function getMyCoursesWithVideos(token) {
  const url = config.BASE_URL + '/student/my-course-with-videos'
  const headers = { token }
  const response = await axios.get(url, { headers })
  return response.data
}