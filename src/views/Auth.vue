<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const isSignUp = ref(false)
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

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

async function handleLogin () {
  try {
    const data = await authStore.login(user.value.login)

    localStorage.token = data
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
    <div class="min-h-screen flex text-sm">
        <div class="w-1/2 bg-white flex items-center justify-center">
            <form v-if="!isSignUp" class="flex flex-col items-center justify-center text-center gap-5">
                <h1 class="font-bold text-4xl">Sign In to <h1 class="text-blue-500">News Aggregator!</h1>
                </h1>
                <div class="flex flex-col gap-3 w-full">
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Username"
                            v-model="user.login.username"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:password" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="password"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Password"
                            v-model="user.login.password"
                            />
                    </label>
                </div>
                <p class="text-xs">Forgot your Password?</p>
                <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs" @click.prevent="handleLogin()">sign in</button>
                <p>Don't have an account?
                    <span class="text-green-500 cursor-pointer" @click="isSignUp = !isSignUp">Sign Up</span></p>
            </form>
            <form v-else class="flex flex-col items-center justify-center text-center gap-5">
                <h1 class="font-bold text-4xl">Sign Up to <h1 class="text-blue-500">News Aggregator!</h1>
                </h1>
                <div class="flex flex-col gap-3 w-full">
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Username"
                            v-model="user.register.username"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:password" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="password"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Password"
                            v-model="user.register.password"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your First Name"
                            v-model="user.register.first_name"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Last Name"
                            v-model="user.register.last_name"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mingcute:birthday-2-line" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="number"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Age"
                            v-model="user.register.age"
                            />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="icons8:gender" class="w-5 h-5 text-slate-950" />
                        </span>
                        <select
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3 selection:invalid:text-red-600"
                            v-model="user.register.gender"
                            >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:city" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your City"
                            v-model="user.register.city"
                            />
                    </label>
                </div>
                <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs" @click.prevent="handleRegister()">sign Up</button>
                <p>Already have an account? <span class="text-green-500 cursor-pointer" @click="isSignUp = !isSignUp">Sign In</span></p>
            </form>
        </div>
        <div class="w-1/2 flex items-center justify-center bg-black">
            <img src="../assets/img.png" />
        </div>
    </div>
</template>
