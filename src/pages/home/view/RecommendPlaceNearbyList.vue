<script setup>
import PlaceNearbyCardItem from "components/PlaceNearbyCardItem.vue";
import SectionTitle from "components/SectionTitle.vue";

const { placeNearbyList } = defineProps({
  placeNearbyList: Array,
});

const [firstPlaceNearbyItem, ...otherPlaceNearbyItem] = placeNearbyList;
</script>

<template>
  <section-title title="PLACES NEARBY" center-title>
    <div class="row q-col-gutter-lg">
      <div class="col-md-6 col-xs-12">
        <place-nearby-card-item :nearby-item="firstPlaceNearbyItem" />
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row q-col-gutter-lg">
          <div
            class="col-6"
            v-for="item in otherPlaceNearbyItem"
            :key="`place_nearby_item_${item.id}`"
          >
            <place-nearby-card-item :nearby-item="item" />
          </div>
        </div>
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
