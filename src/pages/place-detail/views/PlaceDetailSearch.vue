<script setup>
import PlaceDetailItem from "pages/place-detail/components/PlaceDetailItem.vue";
import PlaceDetailLabelWrapper from "pages/place-detail/components/PlaceDetailLabelWrapper.vue";
import PlaceDetailTagItem from "pages/place-detail/components/PlaceDetailTagItem.vue";

const tagList = [
  {
    title: "Booking",
  },
  {
    title: "Hotel",
  },
  {
    title: "Place",
  },
];
</script>

<template>
  <div class="bg-grey-1 q-pa-lg br-sm">
    <place-detail-label-wrapper label="Tags">
      <div class="row">
        <place-detail-tag-item
          v-for="(tag, index) in tagList"
          :key="index"
          :tag="tag"
        />
      </div>
    </place-detail-label-wrapper>
    <q-separator class="q-my-md" />
    <place-detail-label-wrapper label="Search">
      <q-input
        outlined
        dense
        model-value=""
        class="bg-white"
        placeholder="Find some place"
      />
      <div class="q-my-lg" />
      <div>
        <PlaceDetailItem v-for="item in 3" :key="item" class="q-mb-md" />
      </div>
    </place-detail-label-wrapper>
  </div>
</template>

<style scoped lang="css"></style>
