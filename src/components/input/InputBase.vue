<script setup>

const { label } = defineProps({
  label: {
    required: false,
    type: String
  },
})

</script>

<template>
  <p v-if="label" class="q-mb-sm text-weight-medium text-body1">{{ label }}</p>
  <slot />
</template>

<style scoped lang="css">

</style>
