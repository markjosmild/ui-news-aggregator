<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '../stores/newsStore'
import moment from 'moment'

const newsStore = useNewsStore()

onMounted(async () => {
  await newsStore.get()
})

</script>

<template>
  <nav-bar />
  <div class="flex-1 flex flex-col items-center">
    <div class="w-1/2">
      <h1 class="font-bold text-3xl pt-5">Fresh news for you...</h1>
      <div
        class="pt-10"
        v-for="(news, idx) in newsStore.list"
        :key="idx"
      >
        <div class="relative">
          <div class="flex items-center gap-2 text-sm">
            <div
              :class="idx%2 == 0 ? `bg-gray-500`:'bg-gray-500'"
              class="w-10 h-10 rounded-full font-bold flex items-center justify-center"
            >
              {{ `${news.user.first_name.charAt(0) + news.user.last_name.charAt(0)}` }}
            </div>
            <div class="flex flex-col">
              <span class="font-bold capitalize">
                {{ `${news.user.first_name} ${news.user.last_name}` }}
              </span>
              <span>{{ moment(news.created_at).format('MMMM Do YYYY, h:mm a') }}</span>
            </div>
          </div>
          <div class="flex flex-col pt-5 gap-5">
            <h1 class="text-2xl font-bold">{{ news.title }}</h1>
            <div v-html="news.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
