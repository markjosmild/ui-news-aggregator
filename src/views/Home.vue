<script setup>
import { ref } from 'vue'

const newsList = ref([
  {
    first_name: 'Artem',
    last_name: 'Gladkob',
    title: 'Electronic Arts Lorem ipsum dolor sit amet.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, rem repudiandae! Eos deserunt laborum eaque. Mollitia unde alias vitae iure?...'
  },
  {
    first_name: 'Artem',
    last_name: 'Gladkob',
    title: 'Electronic Arts Lorem ipsum dolor sit amet.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, rem repudiandae! Eos deserunt laborum eaque. Mollitia unde alias vitae iure?...'
  },
  {
    first_name: 'Artem',
    last_name: 'Gladkob',
    title: 'Electronic Arts Lorem ipsum dolor sit amet.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, rem repudiandae! Eos deserunt laborum eaque. Mollitia unde alias vitae iure?...'
  }
])

</script>

<template>
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-1/2">
      <h1 class="font-bold text-3xl pt-5">Fresh news for you...</h1>
      <div v-for="(news, idx) in newsList" :key="idx">
      <div class="pt-10">
        <div class="flex items-center gap-2 text-sm">
          <div class="bg-green-500 w-10 h-10 rounded-full font-bold border border-black flex items-center justify-center">
            AG
          </div>
          <div class="flex flex-col">
            <span class="font-bold">{{ `${news.first_name} ${news.last_name}` }}</span>
            <span>October 8, 2022</span>
          </div>
        </div>
        <div class="flex flex-col pt-5 gap-5">
          <h1 class="text-2xl font-bold">{{ news.title }}</h1>
          <p>
            {{ news.content }}
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
