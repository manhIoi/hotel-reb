<script setup>
const { service } = defineProps({
  service: Object,
});
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-md-4 col-xs-12">
      <q-img :src="service.images[0]" />
    </div>
    <div class="col-md-8 col-xs-12">
      <div class="row q-col-gutter-lg">
        <div class="col-12">
          <q-img :src="service.images[1]" />
        </div>
        <div class="col">
          <q-img :src="service.images[2]" />
        </div>
        <div class="col">
          <q-img :src="service.images[3]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
