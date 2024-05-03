<script setup>
const props = defineProps({
  value: Number,
  title: String
})
const _title = props.title.toUpperCase();
</script>

<template>
  <div class="q-pa-lg outstanding-item-container bg-white column flex-center shadow-1">
    <p class="text-h2 text-weight-bold text-primary">{{props.value}}+</p>
    <p class="text-subtitle1 text-weight-medium text-grey-7">{{_title}}</p>
  </div>
</template>

<style scoped lang="css">
.outstanding-item-container {
  border-radius: 16px;
}

</style>
