<script setup>
</script>

<template>
    <div :class="`bg-black text-sm uppercase font-semibold text-white flex flex-row items-center justify-center gap-10 border-b-2`">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'news'}">News</router-link>
        <div class="bg-white text-black py-5 px-36">
            <h1>NEWS AGGREGATOR</h1>
        </div>
        <router-link :to="{name: 'post'}">POST</router-link>
        <router-link :to="{name: 'home'}"><div class="bg-green-500 text-black w-10 h-10 rounded-full font-bold border border-black flex items-center justify-center">
            AG
        </div></router-link>

    </div>
</template>

<style scoped></style>
