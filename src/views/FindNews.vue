<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import moment from 'moment'

const articles = ref(null)

onMounted(async () => {
  const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=ph&apiKey=b88b7d256f884e87ad5b59eb4eab5a39')
  articles.value = data.articles

  console.log(articles.value)
})

function gotoUrl (url) {
  window.location.href = url
}

</script>

<template>
  <nav-bar />
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-1/2">
      <h1 class="font-bold text-3xl pt-5">Hot news in the Philippines...</h1>
      <ol
        class="list-decimal pt-10"
        v-if="articles"
      >
        <li
          class="pb-5 cursor-pointer"
          v-for="(article, idx) in articles"
          @click="gotoUrl(article.url)"
          :key="idx"
        >
          <h1 class="text-2xl font-bold">{{ `Title: ${article.title}` }}</h1>
          <p>{{ `Source: ${article.source?.name}` }}:</p>
          <p>{{ `Author: ${article.author}` }}</p>
          <p>{{ `Date published: ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}` }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>
