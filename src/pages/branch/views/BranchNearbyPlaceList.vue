<script setup>
import SectionTitle from "components/SectionTitle.vue";
import PlaceNearbyItem from "components/PlaceNearbyItem.vue";

const {placeNearbyList} = defineProps({
  placeNearbyList: Array
})

</script>

<template>
  <SectionTitle title="PLACES NEARBY">
    <div class="row q-col-gutter-lg">
      <div
        v-for="item in placeNearbyList"
        :key="`nearby_${item}`"
        class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
      >
        <place-nearby-item :nearby-item="item"/>
      </div>
    </div>
  </SectionTitle>
</template>

<style scoped lang="css">

</style>
