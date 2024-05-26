<script>
import MainWrapper from "layouts/MainWrapper.vue";

export default {
  name: "PlaceDetailHeader",
  components: { MainWrapper },
};
</script>

<template>
  <q-parallax :height="300" :speed="1">
    <template v-slot:media>
      <q-img
        src="https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-pool-popup-01.jpg"
        fit="cover"
      />
    </template>
    <main-wrapper style="z-index: 2">
      <q-item-label class="text-white text-h2 text-weight-medium text-center">
        VISITING MOUNTAIN VILLAGE
      </q-item-label>
    </main-wrapper>
    <div class="overlay" />
  </q-parallax>
</template>

<style scoped lang="css"></style>
