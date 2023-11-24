<script setup>
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()

if (window.localStorage.token) {
  authStore.getAuth()
}
</script>

<template>
    <div>
        <nav-bar />
        <router-view />
    </div>
</template>
