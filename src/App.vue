<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/the/NavBar.vue'

</script>

<template>
  <div class="">
    <nav-bar />
    <router-view />
  </div>
</template>

<style scoped></style>
