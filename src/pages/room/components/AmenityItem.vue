<script setup>
const { amenity } = defineProps({
  amenity: Object,
});
</script>

<template>
  <div class="column flex-center q-pa-md br-sm custom-shadow text-grey-9">
    <q-icon :name="amenity.icon" size="38px" class="q-mb-sm" />
    <q-item-label class="text-weight-medium text-subtitle1">
      {{ amenity.name }}
    </q-item-label>
  </div>
</template>

<style scoped lang="css"></style>
