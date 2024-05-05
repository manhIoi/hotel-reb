<script setup>

const { label } = defineProps({
  label: String,
})

</script>

<template>
  <p v-if="label" class="q-mb-sm text-weight-medium text-body1">{{ label }}</p>
  <slot />
</template>

<style scoped lang="css">

</style>
