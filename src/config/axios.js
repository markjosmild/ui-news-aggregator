// libs
import axios from 'axios'

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
        if (error.response.status === 401) {
          window.localStorage.clear()
        }

        return Promise.reject(error)
      }
    )

    return instance
  }
)()
