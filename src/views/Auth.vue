<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import Swal from 'sweetalert2'

import BaseInput from '../components/base/Input.vue'
import BaseButon from '../components/base/Button.vue'
import BaseSelect from '../components/base/Select.vue'

const router = useRouter()
const authStore = useAuthStore()

const isSignUp = ref(false)
const errorMessage = ref(null)

const user = ref({
  login: {
    username: '',
    password: ''
  },
  register: {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    age: '',
    gender: 'male',
    city: ''
  }
})

async function handleRegister () {
  try {
    const data = await authStore.register(user.value.register)

    if (data) {
      isSignUp.value = false

      Swal.fire({
        title: 'Success',
        text: 'Registered Succesfully',
        icon: 'success'
      })
      errorMessage.value = null
    }
  } catch (error) {
    errorMessage.value = error.response.data
  }
}

async function handleLogin () {
  try {
    const data = await authStore.login(user.value.login)
    localStorage.token = data

    await authStore.getAuth()
    errorMessage.value = null
    router.push('/')
  } catch (error) {
    errorMessage.value = error.response.data
  }
}

function handlePage () {
  isSignUp.value = !isSignUp.value
  errorMessage.value = null
}

</script>

<template>
  <div class="min-h-screen flex text-sm">
    <div class="w-1/2 bg-white flex items-center justify-center">
      <form
        v-if="!isSignUp"
        class="flex flex-col items-center justify-center text-center gap-5"
      >
        <h1 class="font-bold text-4xl">Sign In to <h1 class="text-blue-500">News Aggregator!</h1>
        </h1>
        <div class="flex flex-col gap-3 w-full">
          <base-input
            :error="errorMessage"
            icon="mdi:user"
            label="Username"
            :modelValue="user.login.username"
            @update:modelValue="(v) => user.login.username = v"
          />
          <base-input
            type="password"
            :modelValue="user.login.password"
            :error="errorMessage"
            icon="mdi:password"
            label="Password"
            @update:modelValue="(v) => user.login.password = v"
          />
          <p class="text-red-500 pt-0">{{ errorMessage }}</p>
        </div>
        <!-- <p class="text-xs">Forgot your Password?</p> -->
        <base-buton
          label="sign in"
          @click.prevent="handleLogin()"
        />
        <p>Don't have an account?
          <span
            class="text-green-500 cursor-pointer"
            @click="handlePage()"
          >Sign Up</span>
        </p>
      </form>
      <form
        v-else
        class="flex flex-col items-center justify-center text-center gap-5"
      >
        <h1 class="font-bold text-4xl">Sign Up to <h1 class="text-blue-500">News Aggregator!</h1>
        </h1>
        <div class="flex flex-col gap-3 w-full">
          <base-input
            :error="errorMessage"
            icon="mdi:user"
            label="Username"
            :modelValue="user.register.username"
            @update:modelValue="(v) => user.register.username = v"
          />
          <base-input
            type="password"
            :error="errorMessage"
            icon="mdi:password"
            label="Password"
            :modelValue="user.register.password"
            @update:modelValue="(v) => user.register.password = v"
          />
          <base-input
            :error="errorMessage"
            icon="mdi:user"
            label="First Name"
            :modelValue="user.register.first_name"
            @update:modelValue="(v) => user.register.first_name = v"
          />
          <base-input
            :error="errorMessage"
            icon="mdi:user"
            label="Last Name"
            :modelValue="user.register.last_name"
            @update:modelValue="(v) => user.register.last_name = v"
          />
          <base-input
            type="number"
            :error="errorMessage"
            icon="mingcute:birthday-2-line"
            label="Age"
            :modelValue="user.login.username"
            @update:modelValue="(v) => user.register.age = v"
          />
          <base-select
            :error="errorMessage"
            icon="icons8:gender"
            :modelValue="user.register.gender"
            @update:modelValue="(v) => user.register.gender = v"
          />
          <base-input
            :error="errorMessage"
            icon="mdi:city"
            label="City"
            :modelValue="user.register.city"
            @update:modelValue="(v) => user.register.city = v"
          />
          <p class="text-red-500 pt-0">{{ errorMessage }}</p>
        </div>
        <base-buton
          label="sign Up"
          @click.prevent="handleRegister()"
        />
        <p>Already have an account? <span
          class="text-green-500 cursor-pointer"
          @click="handlePage()"
        >Sign
          In</span></p>
      </form>
    </div>
    <div class="w-1/2 flex items-center justify-center bg-black">
      <img src="../assets/img.png">
    </div>
  </div>
</template>
