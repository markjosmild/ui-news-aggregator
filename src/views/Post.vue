<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useNewsStore } from '../stores/newsStore'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const newsStore = useNewsStore()

const news = ref({
  user_id: '',
  title: '',
  content: ''
})

const errorMessage = ref(null)

async function handlePost () {
  try {
    news.value.user_id = authStore.auth.id
    const data = await newsStore.create(news.value)
    if (data) {
      errorMessage.value = null

      Swal.fire({
        title: 'Success',
        text: 'Posted Succesfully',
        icon: 'success'
      })
    }
    console.log(data)
  } catch (error) {
    errorMessage.value = error.response.data
  }
}

</script>

<template>
  <nav-bar />
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-1/2 pt-5 flex flex-col gap-5">
      <h1 class="font-bold text-3xl">CREATE NEWS</h1>
      <div>
        <h1 class="font-bold">Title</h1>
        <span class="text-sm">Formulate the title so that it is immediate clear what it is about.</span>
        <label>
          <input
            type="text"
            v-model="news.title"
            class="bg-black w-full h-7 rounded-md py-3 pl-3 pr-3 text-white"
            placeholder="Enter news Title"
          >
        </label>
      </div>
      <div>
        <h1 class="font-bold">Details</h1>
        <span class="text-sm">Formulate the title so that it is immediate clear what it is about.</span>
        <div class="h-72 border border-black pb-10">
          <quill-editor
            v-model:content="news.content"
            content-type="html"
            placeholder="Enter some text here..."
          />
        </div>
      </div>
      <div class="">
        <p class="text-red-500 text-sm">{{ errorMessage }}</p>
        <button
          class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs"
          @click.prevent="handlePost()"
        >Publish News</button>
      </div>
    </div>
  </div>
</template>
