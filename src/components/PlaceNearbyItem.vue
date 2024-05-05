<script setup>
const { nearbyItem } = defineProps({
  nearbyItem: Object
})
</script>

<template>
  <q-card class="my-card">
    <q-img :src="nearbyItem.image">
      <div class="absolute-bottom">
        <q-card-section class="row items-center">
          <p class="text-h6 text-weight-medium text-white">{{ nearbyItem.name }}</p>
          <q-separator size="2px" class="q-mx-md" vertical color="grey-9" />
          <p class="text-subtitle2 text-weight-bolder text-primary">{{ nearbyItem.distance }}m</p>
        </q-card-section>
      </div>
    </q-img>
  </q-card>
</template>

<style scoped lang="css">

</style>
