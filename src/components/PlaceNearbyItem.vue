<script setup>
const { nearbyItem } = defineProps({
  nearbyItem: Object,
});
</script>

<template>
  <q-card class="my-card cursor-pointer fit" flat>
    <q-img :src="nearbyItem.image" class="card-image">
      <q-card-section
        class="flex absolute-bottom row items-center full-width no-wrap"
      >
        <p class="text-h6 text-weight-medium text-white text-no-wrap">
          {{ nearbyItem.name }}
        </p>
        <q-separator size="2px" class="q-mx-sm" vertical color="grey-6" inset />
        <p class="text-subtitle2 text-weight-bolder text-primary">
          {{ nearbyItem.distance }}m
        </p>
      </q-card-section>
    </q-img>
  </q-card>
</template>

<style scoped lang="css">
.card-image {
  height: 400px;
}
</style>
