<script setup>
const { nearbyItem } = defineProps({
  nearbyItem: Object,
});
</script>

<template>
  <q-responsive :ratio="1">
    <q-card
      flat
      class="my-card full-width full-height flex overflow-hidden cursor-pointer"
    >
      <q-img :src="nearbyItem.image" class="full-width full-height" />
      <div class="absolute-bottom column q-pa-sm card-info q-ma-sm">
        <p class="text-body1 text-weight-medium text-white text-no-wrap">
          {{ nearbyItem.name }}
        </p>
        <p class="text-subtitle2 text-weight-bolder text-primary">
          {{ nearbyItem.distance }}m
        </p>
        <div class="overlay"></div>
      </div>
    </q-card>
  </q-responsive>
</template>

<style scoped lang="css">
.card-info {
  overflow: hidden;
  border-radius: 8px !important;
  z-index: 2 !important;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.71);
  filter: blur(4px);
  z-index: -1;
}
</style>
