<script setup lang="ts">
const { config } = useDocus()
const { navigation } = useContent()
const links = computed(() => config.value.navigation.links || [])
const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)
const props = defineProps({
  mobile: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
    <nuxt-link
        class="nav-link nav-links-mobile"
        :class="{ active: link.to === $route.path }"
        :aria-label="link.text"
        :href="link.href"
        :target="link?.target || '_self'"
        v-if="props.mobile && hasDialog"
        v-for="link in links"
    >
        {{ link.text }}
    </nuxt-link>
    <div class="nav-links-mobile-space" v-if="props.mobile && hasDialog"></div>
    <nuxt-link
        class="nav-link nav-links"
        :class="{ active: link.to === $route.path }"
        :aria-label="link.text"
        :href="link.href"
        :target="link?.target || '_self'"
        v-else
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
    '@media (max-width: 1024px)': {
      '.nav-links': {
        display: 'none !important'
      }
    },
    '@media (min-width: 1024px)': {
      '.nav-links-mobile': {
        display: 'none !important'
      }
    },
    '.nav-links-mobile-space': {
        marginBottom: '10px',
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
        color: '#00afe4'
      }
    }

})
</style>