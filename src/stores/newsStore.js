import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ServerApi } from '../config/axios'

export const useNewsStore = defineStore('newsStore', () => {
  const list = ref([])

  async function get (payload) {
    const { data } = await ServerApi
      .post('/news/list',
        payload
      )

    list.value = data

    return data
  }

  async function create (payload) {
    const { data } = await ServerApi
      .post('/news',
        payload
      )

    return data
  }

  return {
    create,
    get,
    list
  }
})
