<script setup>
import PlaceDetailItem from "pages/place-detail/components/PlaceDetailItem.vue";
import PlaceDetailLabelWrapper from "pages/place-detail/components/PlaceDetailLabelWrapper.vue";
</script>

<template>
  <div class="bg-grey-1 q-pa-lg br-sm">
    <place-detail-label-wrapper label="Tags"> </place-detail-label-wrapper>
    <q-separator class="q-my-md" />
    <place-detail-label-wrapper label="Search">
      <q-input outlined dense model-value="" label="Search" class="bg-white" />
      <div class="q-my-lg" />
      <div>
        <PlaceDetailItem v-for="item in 3" :key="item" class="q-mb-md" />
      </div>
    </place-detail-label-wrapper>
  </div>
</template>

<style scoped lang="css"></style>
