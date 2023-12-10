import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ServerApi } from '../config/axios'
import axios from 'axios'

export const useNewsStore = defineStore('newsStore', () => {
  const list = ref(null)
  const articles = ref(null)

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

  async function getFromExternalAPI () {
    const { data } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=ph&apiKey=b88b7d256f884e87ad5b59eb4eab5a39'
    )

    articles.value = data.articles
    return data.articles
  }

  return {
    create,
    get,
    getFromExternalAPI,
    list,
    articles
  }
})
