<script setup>

const emit = defineEmits(['clickItem']);
const { bookingItem } = defineProps({
  bookingItem: Object
});

const background = bookingItem.images?.[0];
const {information} = bookingItem;

</script>

<template>
  <q-card flat class="booking-item-container bg-white row" @click="emit('clickItem', bookingItem)">
    <div class="col-xs-12 col-sm-6">
      <q-img class="full-width full-height" :src="background" :alt="`booking_item_${bookingItem.id}`"/>
    </div>
    <div class="col-xs-12 col-sm-6">
      <div class="q-pa-md">
        <q-card-section>
          <div class="column items-start">
            <div class="q-pa-sm row flex-center booking-item-content_btn text-primary q-mb-lg">
              <p class="text-weight-bolder text-subtitle1 q-mr-xs">${{ bookingItem.amount }}</p>
              <p class="text-weight-medium text-body-2">Per night</p>
            </div>
            <p class="text-h4 text-weight-bold q-mb-lg"> {{ bookingItem.name }}</p>
            <div class="row q-mb-lg">
              <div class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9">
                <q-icon name="person" class="q-mr-xs" size="24px"/>
                <p>{{ information.adultNumber }} Adults</p>
              </div>
              <div class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9">
                <q-icon name="person" class="q-mr-xs" size="24px"/>
                <p>{{ information.childrenNumber }} Adults</p>
              </div>
              <div class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9">
                <q-icon name="person" class="q-mr-xs" size="24px"/>
                <p>{{ information.acreage }} Adults</p>
              </div>
            </div>
          </div>
          <q-separator class="q-mb-lg" />
          <p class="text-grey-8 text-body2 q-mb-lg">{{ bookingItem.description }}</p>
          <q-btn color="primary" size="lg" class="q-px-xl br-sm">
            <p class="text-white text-weight-bold">
              Book now
            </p>
          </q-btn>
        </q-card-section>
      </div>

    </div>
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
