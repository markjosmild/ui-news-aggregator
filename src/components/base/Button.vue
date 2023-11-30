<script setup>
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button
    class="bg-black text-white px-4 py-2 rounded uppercase font-bold text-xs"
  >{{ label }}
  </button>
</template>
