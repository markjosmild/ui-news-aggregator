// libs
import axios from 'axios'
import _ from 'lodash'

export const ServerApi = (
  () => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_SERVER_API,
      timeout: 10000
    })

    instance.interceptors.request.use(
      config => {
        if (localStorage.token) {
          config.headers.Authorization = `Bearer ${localStorage.token}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    instance.interceptors.response.use(
      config => config,
      error => {
        const statusCode = _.get(error, 'response.status')

        if (statusCode === 401) {
          window.localStorage.clear()
        }

        return Promise.reject(error)
      }
    )

    return instance
  }
)()
