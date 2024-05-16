<script setup>
const { room } = defineProps({
  room: Object,
});
</script>

<template>
  <q-parallax :height="300" :speed="1">
    <template v-slot:media>
      <q-img :src="room.images[0]" />
    </template>

    <q-item-label
      class="text-white text-h2 text-weight-medium"
      style="z-index: 2"
    >
      {{ room.name }}
    </q-item-label>
    <div class="overlay" />
  </q-parallax>
</template>

<style scoped lang="css">
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  filter: blur(4px);
  z-index: 1;
}
</style>
