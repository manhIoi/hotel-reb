<script setup>
import OutStandingItem from "pages/home/components/OutStandingItem.vue";
import { ref } from "vue";

const { slideImageList = [], outstandingList = [] } = defineProps({
  slideImageList: Array,
  outstandingList: Array,
});

const slide = ref(0);
</script>

<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    autoplay
    class="br-sm"
  >
    <q-carousel-slide
      v-for="(item, index) in slideImageList"
      :name="index"
      :img-src="item"
      :key="item"
    />
  </q-carousel>
  <div class="row q-ma-lg">
    <div
      v-for="(item, index) in outstandingList"
      :key="`${item.title}_${index}`"
      class="col-md-4 col-xs-12 q-pa-md"
    >
      <out-standing-item :title="item.title" :value="item.value" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
