<script setup>
</script>

<template>
  <div class="min-h-screen bg-slate-200 flex flex-col items-center">
    <div class="w-1/2 pt-10 flex flex-col gap-10">
      <div>
        <h1 class="font-bold">Enter Your News Title</h1>
        <span class="text-sm">Formulate the title so that it is immediate clear what it is about.</span>
        <label>
          <input
            type="text"
            class="bg-black w-full h-7 rounded-md py-3 pl-3 pr-3 text-white"
            placeholder="Enter news Title" />
        </label>
      </div>
      <div>
        <h1 class="font-bold">Enter Your News Details</h1>
        <span class="text-sm">Formulate the title so that it is immediate clear what it is about.</span>
        <label>
          <input
            type="text"
            class="bg-black w-full h-7 rounded-md py-3 pl-3 pr-3 text-white"
            placeholder="Enter news Details" />
        </label>
      </div>
      <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs">Publish News</button>
    </div>
  </div>
</template>
