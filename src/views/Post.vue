<script setup>

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
            class="bg-black w-full h-7 rounded-md py-3 pl-3 pr-3 text-white"
            placeholder="Enter news Title" />
        </label>
      </div>
      <div>
        <h1 class="font-bold">Details</h1>
        <span class="text-sm">Formulate the title so that it is immediate clear what it is about.</span>
        <div class="h-72 border border-black pb-10">
          <quill-editor
          content-type="html"
          placeholder="Enter some text here..."
          />
        </div>
      </div>
      <div class="">
        <button class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs">Publish News</button>
      </div>
    </div>
  </div>
</template>
