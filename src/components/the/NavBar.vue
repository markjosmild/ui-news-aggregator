<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navs = ref([
  { name: 'home', path: { name: 'home' } },
  { name: 'my news', path: { name: 'news' } },
  { name: 'create post', path: { name: 'post' } },
  { name: 'sign in', path: { name: 'auth' } }
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
</template>

<style scoped></style>
