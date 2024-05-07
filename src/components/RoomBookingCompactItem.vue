<script setup>
const emit = defineEmits(['clickItem']);
const { bookingItem } = defineProps({
  bookingItem: Object
})

const background = bookingItem.images?.[0]

</script>

<template>
  <q-card flat class="booking-item-container bg-white row" @click="emit('clickItem', bookingItem)">
    <q-img class="full-width full-height" :src="background" :alt="`booking_item_${bookingItem.id}`"/>
    <q-card-section class="full-width" >
      <div class="row justify-between items-center q-mb-md no-wrap">
        <p class="text-h6 text-weight-medium ellipsis q-mr-md"> {{ bookingItem.name }}</p>
        <div class="q-pa-xs flex-center booking-item-content_btn text-primary">
          <p class="text-weight-medium text-subtitle1 text-no-wrap">${{ bookingItem.amount }}/Per night</p>
        </div>
      </div>
      <div class="row">
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon name="fa-solid fa-person" class="q-mr-xs" size="24px"/>
          <p>{{ bookingItem.information.adultNumber }} Adults</p>
        </div>
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon name="fa-solid fa-child-reaching" class="q-mr-xs" size="24px"/>
          <p>{{ bookingItem.information.childrenNumber }} Children</p>
        </div>
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon name="fa-solid fa-expand" class="q-mr-xs" size="24px"/>
          <p>{{ bookingItem.information.acreage }} ft</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css">
.booking-item-container {
  border-radius: 8px;
  overflow: hidden;
}

.booking-item-content_btn {
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}

.booking-item-container-wrapper {
  padding: 0 !important;
}
</style>
