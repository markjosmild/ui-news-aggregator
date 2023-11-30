<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },

  icon: {
    type: String,
    default: ''
  },

  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const proxyModel = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    console.log(val)
    emit('update:modelValue', val)
  }
})
</script>
<template>
  <label class="relative block">
    <span class="absolute top-4 left-3">
      <Icon
        :icon="icon"
        class="w-5 h-5 text-slate-950"
      />
    </span>
    <select
      :class="error ? 'border border-red-500 ' : 'border border-slate-300 '"
      class="bg-gray-100 w-full h-12 rounded-md py-2 pl-9 pr-3"
      v-model="proxyModel"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </label>
</template>
