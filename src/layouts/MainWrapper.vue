<script setup>
const {backgroundColor} = defineProps({
  backgroundColor: {
    type: String,
    default: 'bg-transparent',
  },
})
</script>

<template>
  <div :class="backgroundColor">
    <div class="q-mx-auto screen-container q-pa-md">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="css">
.screen-container {
  max-width: var(--container-width);
  padding-bottom: 60px;
  padding-top: 60px;
}
</style>
