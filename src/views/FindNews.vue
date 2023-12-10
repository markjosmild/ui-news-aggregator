<script setup>
import { onMounted } from 'vue'
import moment from 'moment'
import { useNewsStore } from '../stores/newsStore'

const newsStore = useNewsStore()

onMounted(async () => {
  if (!newsStore?.articles) {
    await newsStore.getFromExternalAPI()
  }
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
        v-if="newsStore?.articles"
      >
        <li
          class="pb-5 cursor-pointer"
          v-for="(article, idx) in newsStore.articles"
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
