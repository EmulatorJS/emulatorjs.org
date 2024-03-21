<script setup lang="ts">
const { config } = useDocus()
const logo = computed(() => config.value.header?.logo || false)
const title = computed(() => config.value.header?.title || config.value.title)
</script>

<template>
  <NuxtLink
    class="navbar-logo"
    to="/"
    :aria-label="title"
  >
  <div class="text-logo">
    <div
      class="logo"
    >
      <component
        :is="logo"
        v-if="typeof logo === 'string'"
      />
      <template v-else-if="logo.light && logo.dark">
        <img
          :src="logo.light"
          alt=""
          class="light-img"
        >
        <img
          :src="logo.dark"
          alt=""
          class="dark-img"
        >
      </template>
    </div>

    <!-- Only title -->
    <div
      class="title"
    >
      {{ title }}
    </div>
  </div>
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  a: {
    display: 'flex',
    alignItems: 'center',

    '.logo': {
      height: 'calc({docus.header.logo.height} + {docus.header.title.fontSize})',
      display: 'inline-block',
      padding: '0 1rem',
      width: 'auto',
      'img, svg': {
        height: 'inherit',
      },
      '.light-img': {
        display: 'block',
        '@dark': {
          display: 'none'
        }
      },
      '.dark-img': {
        display: 'none',
        '@dark': {
          display: 'block'
        }
      },
    },

    '.title': {
      fontSize: '{docus.header.title.fontSize}',
      fontWeight: '{docus.header.title.fontWeight}',
      color: '{docus.header.title.color.static}',
      display: 'inline-block',
      '&:hover': {
        color: '{docus.header.title.color.hover}',
      }
    },

    '.text-logo': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
    }
  }
})
</style>