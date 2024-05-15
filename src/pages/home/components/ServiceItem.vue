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
    <p class="text-subtitle1">{{ service.title }}</p>
    <p class="text-grey-8">{{ service.desc }}</p>
  </div>
</template>

<style scoped lang="css"></style>
