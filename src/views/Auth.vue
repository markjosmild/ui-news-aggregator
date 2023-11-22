<script setup>
import { ref } from 'vue'

const isSignUp = ref(false)
</script>

<template>
    <div class="bg-green-900 min-h-screen flex text-sm">
        <div class="w-1/2 bg-white flex items-center justify-center">
            <form v-if="!isSignUp" class="flex flex-col items-center justify-center text-center gap-5">
                <h1 class="font-bold text-4xl">Sign In to <h1 class="text-green-500">News Aggregator!</h1>
                </h1>
                <Icon icon="fluent-mdl2:news" class="w-14 h-14" />
                <div class="flex flex-col gap-3 w-full">
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Username" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:password" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="password"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Password" />
                    </label>
                </div>
                <p class="text-xs">Forgot your Password?</p>
                <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs">sign in</button>
                <p>Don't have an account? <span class="text-green-500">Sign Up</span></p>
            </form>
            <form v-else class="flex flex-col items-center justify-center text-center gap-5">
                <h1 class="font-bold text-4xl">Sign Up to <h1 class="text-green-500">News Aggregator!</h1>
                </h1>
                <Icon icon="fluent-mdl2:news" class="w-14 h-14" />
                <div class="flex flex-col gap-3 w-full">
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Username" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:password" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="password"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Password" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your First Name" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:user" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Last Name" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mingcute:birthday-2-line" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="number"
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your Age" />
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="icons8:gender" class="w-5 h-5 text-slate-950" />
                        </span>
                        <select
                            class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3 selection:invalid:text-red-600">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label class="relative block">
                        <span class="absolute top-4 left-3">
                            <Icon icon="mdi:city" class="w-5 h-5 text-slate-950" />
                        </span>
                        <input type="text" class="bg-gray-100 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3"
                            placeholder="Enter your City" />
                    </label>
                </div>
                <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs">sign Up</button>
                <p>Already have an account? <span class="text-green-500">Sign In</span></p>
            </form>
        </div>
        <div class="w-1/2">B</div>
    </div>
</template>
