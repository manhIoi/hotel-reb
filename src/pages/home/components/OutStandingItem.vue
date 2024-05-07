<script setup>
const props = defineProps({
  value: Number,
  title: String,
});
const _title = props.title.toUpperCase();
</script>

<template>
  <div class="q-pa-lg custom-shadow bg-white column flex-center br-md shadow-3">
    <p class="text-h3 text-weight-bold text-primary">{{ props.value }}+</p>
    <p class="text-subtitle1 text-weight-medium text-grey-7">{{ _title }}</p>
  </div>
</template>

<style scoped lang="css"></style>
