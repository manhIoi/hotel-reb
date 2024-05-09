<script setup>
const { imageList = [] } = defineProps({
  imageList: {
    type: Array,
  },
});
const [firstImage, ...otherImages] = imageList;
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-md-6 col-xs-12">
      <q-img class="br-sm" :src="firstImage" />
    </div>
    <div class="col-md-6 col-xs-12">
      <div class="row q-col-gutter-lg">
        <div v-for="image in otherImages" :key="image" class="col-6">
          <q-img :src="firstImage" class="br-sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
