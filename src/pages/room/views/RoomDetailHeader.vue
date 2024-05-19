<script setup>
import MainWrapper from "layouts/MainWrapper.vue";

const { room } = defineProps({
  room: Object,
});
</script>

<template>
  <q-parallax :height="300" :speed="1">
    <template v-slot:media>
      <q-img :src="room.images[0]" />
    </template>
    <main-wrapper style="z-index: 2">
      <q-item-label class="text-white text-h2 text-weight-medium text-center">
        {{ room.name }}
      </q-item-label>
    </main-wrapper>
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
