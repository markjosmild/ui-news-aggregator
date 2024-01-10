<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useNewsStore } from '../stores/newsStore'
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'

const authStore = useAuthStore()
const newsStore = useNewsStore()

const route = useRoute()
const router = useRouter()

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

      router.push('/')
    }
  } catch (error) {
    errorMessage.value = error.response.data
  }
}

async function handleUpdatePost () {
  try {
    const data = await newsStore.patch(news.value)
    if (data) {
      errorMessage.value = null

      Swal.fire({
        title: 'Success',
        text: 'News has been updated Succesfully',
        icon: 'success'
      })

      router.push('/')
    }
  } catch (error) {
    errorMessage.value = error.response.data
  }
}

onMounted(async () => {
  if (route.params.id) {
    const data = await newsStore.pick(route.params.id)
    // eslint-disable-next-line camelcase
    const { user, created_at, updated_at, deleted_at, ...others } = data[0]
    news.value = others
  }
})

</script>

<template>
  <nav-bar />
  <div class="flex-1 flex flex-col items-center">
    <div class="w-1/2 pt-5 flex flex-col gap-5">
      <h1 class="font-bold text-3xl">
        {{ !route?.params?.id ? 'CREATE NEWS' : 'UPDATE NEWS' }}
      </h1>
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
          @click.prevent="!route?.params?.id ? handlePost() : handleUpdatePost()"
        >
          {{ !route?.params?.id ? 'PUBLISH NEWS' : 'UPDATE NEWS' }}
        </button>
      </div>
    </div>
  </div>
</template>
