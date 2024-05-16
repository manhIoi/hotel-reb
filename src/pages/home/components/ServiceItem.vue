<script setup>
const { service } = defineProps({
  service: Object,
});
</script>

<template>
  <div class="cursor-pointer q-pa-md br-sm">
    <q-icon
      size="32px"
      :name="service.icon"
      :style="{ color: service.color }"
    />
    <q-item-label class="text-subtitle1"> {{ service.title }}</q-item-label>
    <q-item-label class="text-grey-8"> {{ service.desc }}</q-item-label>
  </div>
</template>

<style scoped lang="css"></style>
