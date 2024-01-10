<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '../stores/newsStore'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

import moment from 'moment'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const newsStore = useNewsStore()

const router = useRouter()

onMounted(async () => {
  await newsStore.get({ user_id: authStore.auth.id })
})

async function handleDelete (news) {
  try {
    const res = await Swal.fire({
      title: 'Do you want to delete this news?',
      showDenyButton: true,
      confirmButtonText: 'yes',
      denyButtonText: 'no'
    })

    if (res.isConfirmed) {
      await newsStore.del(news.id)
      await newsStore.get({ user_id: authStore.auth.id })

      Swal.fire('Deleted!', 'News has been deleted succesfully!', 'success')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <nav-bar />
  <div class="flex-1 flex flex-col items-center">
    <div class="w-1/2">
      <h1 class="font-bold text-3xl pt-5">Profile</h1>
      <div>
        <h1>{{ `Name: ${authStore.auth.first_name} ${authStore.auth.last_name}` }}</h1>
        <h1>{{ `Age: ${authStore.auth.age}` }}</h1>
        <h1>{{ `Gender: ${authStore.auth.gender}` }}</h1>
        <h1>{{ `City: ${authStore.auth.city}` }}</h1>
      </div>
      <h1 class="font-bold text-3xl pt-5">{{ newsStore?.list?.length ? 'Your news...' : 'Looks like you have no news posted yet...' }}</h1>
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
            <div
              class="absolute top-0 right-0 font-semibold flex gap-2"
              :key="idx"
            >
              <span
                @click.prevent="router.push(`/post/${news.id}`)"
                class="text-green-500 cursor-pointer"
              >edit</span>
              <span
                @click.prevent="handleDelete(news)"
                class="text-red-500 cursor-pointer"
              >delete</span>
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
