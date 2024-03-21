<script setup lang="ts">
const { config } = useDocus()
const links = computed(() => config.value.navigation.links || [])
</script>
<template>
    <nuxt-link
        class="nav-link"
        :class="{ active: link.to === $route.path }"
        :aria-label="link.text"
        :href="link.href"
        :target="link?.target || '_self'"
        v-for="link in links"
    >
        {{ link.text }}
    </nuxt-link>
</template>
<style lang="ts" scoped>
css({
    '.nav-link': {
        color: '{docus.colors.primary}',
        textDecoration: 'none',
        '&.active': {
            color: '{docus.colors.primaryDark}',
        },
    },
    '.nav-link + .nav-link': {
        marginLeft: '{docus.space.3}',
    },
    a: {
      display: 'block',
      padding: '{space.1} 0',
      fontSize: '{text.sm.fontSize}',
      lineHeight: '{text.sm.lineHeight}',
      color: '{color.gray.500}',
      truncate: true,
      '@lg': {
        paddingRight: '{space.3}'
      },
      '&:not(.router-link-active):hover': {
        color: '{color.gray.900}',
      },
      '@dark': {
        '&:not(.router-link-active):hover': {
          color: '{color.gray.400}',
        },
      },
      '&.router-link-active': {
        color: '{color.primary.500}'
      }
    }

})
</style>