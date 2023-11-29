<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const router = useRouter()

const authStore = useAuthStore()

if (window.localStorage.token) {
  authStore.getAuth()
} else {
  router.push('/auth')
}

</script>

<template>
    <router-view />
</template>
