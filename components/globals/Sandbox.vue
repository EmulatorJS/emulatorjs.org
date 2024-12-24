<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  dir: {
    type: String,
    default: ''
  },
  file: {
    type: String,
    default: 'app.vue'
  }
})

const url = ref('')

onMounted(() => {
  url.value = props.src
})
</script>

<template>
  <div class="sandbox">
    <iframe
      v-if="url"
      :src="url"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </div>
</template>

<style scoped lang="ts">
css({
  '.sandbox': {
    '--sandbox-height': '700px',
    background: '{elements.surface.background.base}',
    width: '100%',
    height: 'var(--sandbox-height)',
    overflow: 'hidden',
    fontSize: '{text.3xl.fontSize}',
    lineHeight: '{text.3xl.lineHeight}',
    border: '1px solid {elements.border.secondary.static}',
    borderRadius: '{radii.md}',
    iframe: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
  }
})
</style>
