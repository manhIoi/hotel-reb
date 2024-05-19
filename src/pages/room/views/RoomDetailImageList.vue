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
    <div class="col-md-6 col-xs-12 card-custom">
      <div class="br-sm card-custom">
        <q-img class="card-custom_image" :src="firstImage" />
      </div>
    </div>
    <div class="col-md-6 col-xs-12">
      <div class="row q-col-gutter-lg">
        <div v-for="image in otherImages" :key="image" class="col-6">
          <div class="br-sm card-custom">
            <q-img :src="image" class="card-custom_image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
