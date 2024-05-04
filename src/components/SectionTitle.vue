<script setup>
const { title, backgroundColor, centerTitle} = defineProps({
  title: String,
  backgroundColor: {
    type: String,
    default: 'bg-transparent',
  },
  centerTitle: {
    type: Boolean,
    default: false
  }
})
const _title = title.toUpperCase();
</script>

<template>
  <div>
    <div class="row q-pa-lg items-center" :class="[backgroundColor, centerTitle ? 'justify-center' : 'justify-between']">
      <p class="text-h4 text-weight-medium">{{_title}}</p>
      <slot name="right-title" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="css">

</style>
