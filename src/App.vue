<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navs = ref([
  { name: 'home', path: { name: 'home' } },
  { name: 'about', path: { name: 'about' } }
])
</script>

<template>
  <div class="bg-black p-5 uppercase font-semibold text-white flex items-center justify-center gap-5">
    <router-link v-for="(nav, idx) in navs" :key="idx" :to="nav.path">
      <span :class="`hover:text-yellow-500 ${route.name === nav.path.name && 'text-yellow-400'}`">
        {{ nav.name }}
      </span>
    </router-link>
  </div>
  <div class="text-center">
    <router-view />
  </div>
</template>

<style scoped></style>
