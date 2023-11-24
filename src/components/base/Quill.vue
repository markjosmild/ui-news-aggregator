<script setup>

const props = defineProps({
  theme: {
    type: String,
    default: 'snow'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const options = {
  placeholder: props.placeholder,
  readonly: false,
  theme: props.theme
}

</script>

<template>
  <quill-editor
    ref="contents"
    placeholder="Edit some text here..."
    toolbar="essential"
    content-type="html"
    :options="options"
  />
</template>
