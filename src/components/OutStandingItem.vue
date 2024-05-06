<script setup>
const props = defineProps({
  value: Number,
  title: String
})
const _title = props.title.toUpperCase();
</script>

<template>
  <div class="q-pa-lg outstanding-item-container bg-white column flex-center br-md shadow-3">
    <p class="text-h3 text-weight-bold text-primary">{{props.value}}+</p>
    <p class="text-subtitle1 text-weight-medium text-grey-7">{{_title}}</p>
  </div>
</template>

<style scoped lang="css">
.outstanding-item-container {
  box-shadow: 0 12px 8px rgba(1, 146, 243, 0.06), 0 12px 4px rgba(1, 146, 243, 0.06), 0 12px 100px -4px rgba(1, 146, 243, 0.06)
}

</style>
