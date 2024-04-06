<script setup>
defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: "auto"
    },
    height: {
        type: [String, Number],
        default: "auto"
    },
    dark: {
        type: String
    }
})
</script>

<template>
    <template v-if="dark !== undefined">
        <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        class="light-img"
        >
        <img
        :src="dark"
        :alt="alt"
        :width="width"
        :height="height"
        class="dark-img"
        >
    </template>
    <template v-else>
        <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        >
    </template>
</template>

<style scoped>
.light-img {
    display: block;
    @dark {
        display: none;
    }
}
.dark-img {
    display: none;
    @dark {
        display: block;
    }
}
</style>
