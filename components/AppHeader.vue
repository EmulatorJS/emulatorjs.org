<script setup lang="ts">
const { config } = useDocus()
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()
const navigationLink = computed(() => config.value.navigation.enabled || false)

const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)

defineProps({
  ...variants
})
</script>

<template>
  <header :class="{ 'has-dialog': hasDialog }">
    <Container :fluid="config?.header?.fluid ">
      <div class="section left">
        <AppHeaderDialog v-if="hasDialog" />
        <AppHeaderLogo />
      </div>

      <div class="section center">
        <AppHeaderLogo v-if="hasDialog" :image="false"/>
        <AppHeaderNavigation />
      </div>

      <div class="section right">
        <NavigationLink v-if="navigationLink" :mobile="false"/>
        <AppDocSearch v-if="hasDocSearch" />
        <AppSearch
          v-else
          :fuse="config.fuse"
        />
        <ThemeSelect />
        <div class="social-icons">
          <AppSocialIcons />
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}'
  },

  '.navbar-logo': {
    '.left &': {
      '.has-dialog &': {
        display: 'none',
        '@lg': {
          display: 'block'
        }
      },
    },
    '.center &': {
      display: 'block',
      '@lg': {
        display: 'none'
      }
    }
  },

  header: {
    backdropFilter: '{elements.backdrop.filter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottom: '1px solid {elements.border.primary.static}',
    backgroundColor: '{elements.backdrop.background}',
    height: '{docus.header.height}',

    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.2}'
    },

    '.section': {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      '&.left': {
        gridColumn: 'span 4 / span 4',
        '@lg': {
          marginLeft: 0
        },
      },
      '&.center': {
        gridColumn: 'span 3 / span 4',
        justifyContent: 'center',
        flex: '1',
        zIndex: '1',
        '@media (min-width: 1024px)': {
          display: 'none !important'
        },
      },
      '&.right': {
        display: 'flex',
        gridColumn: 'span 5 / span 4',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        marginRight: 'calc(0px - {space.4})',
        '.social-icons': {
          display: 'none',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          }
        },
        '@media (min-width: 1024px)': {
          gridColumn: 'span 8 / span 4 !important'
        },
      }
    }
  }
})
</style>