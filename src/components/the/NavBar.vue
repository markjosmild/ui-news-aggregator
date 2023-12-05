<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
import { vOnClickOutside } from '@vueuse/components'

const router = useRouter()
const showModal = ref(false)

const authStore = useAuthStore()

function handleSignout () {
  authStore.auth = null
  window.localStorage.clear()
  router.push('/auth')
}
</script>

<template>
  <div :class="`bg-black text-sm uppercase font-semibold text-white flex flex-row items-center justify-center gap-10 border-b-2`">
    <router-link :to="{name: 'find-news'}">Find News</router-link>
    <router-link :to="{name: 'home'}">Home</router-link>
    <div class="bg-white text-black py-5 px-36">
      <h1>NEWS AGGREGATOR</h1>
    </div>
    <router-link :to="{name: 'post'}">POST</router-link>
    <div
      @click.prevent="showModal = true"
      class="relative bg-gray-500 text-black w-10 h-10 rounded-full font-bold border border-black cursor-pointer flex items-center justify-center"
    >
      <span v-if="authStore.auth">
        {{ `${authStore.auth?.first_name.charAt(0) + authStore.auth?.last_name.charAt(0)}` }}
      </span>
      <div
        v-if="showModal"
        v-on-click-outside="() => showModal = false"
        class="absolute bg-white text-black left-0 top-0 w-20 ml-5 mt-6 text-xs capitalize font-normal"
      >
        <div class="hover:bg-black hover:text-white cursor-pointer">
          <router-link :to="{name: 'profile'}">Profile</router-link>
        </div>
        <div
          @click="handleSignout()"
          class="hover:bg-black hover:text-white cursor-pointer"
        >
          Sign out
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
