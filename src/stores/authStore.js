import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ServerApi } from '../config/axios'

export const useAuthStore = defineStore('authStore', () => {
  const auth = ref(null)

  async function register (payload) {
    const { data } = await ServerApi
      .post('/auth',
        payload
      )

    return data
  }

  async function login (payload) {
    const { data } = await ServerApi
      .post('/auth/login',
        payload
      )

    return data
  }

  async function getAuth () {
    const { data } = await ServerApi
      .get('/auth')

    auth.value = data

    return data
  }

  return {
    register,
    login,
    getAuth,
    auth

  }
})
