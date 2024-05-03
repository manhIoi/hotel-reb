<script setup>
const { title, backgroundColor} = defineProps({
  title: String,
  backgroundColor: {
    type: String,
    default: 'bg-white'
  }
})
const _title = title.toUpperCase();
</script>

<template>
  <div>
    <div class="row justify-between q-pa-lg items-center" :class="backgroundColor">
      <p class="text-h4 text-weight-medium">{{_title}}</p>
      <slot name="right-title" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="css">

</style>
