<script setup>
const emit = defineEmits(["clickItem"]);
const { bookingItem } = defineProps({
  bookingItem: Object,
});

const background = bookingItem.images?.[0];
</script>

<template>
  <q-card
    flat
    class="booking-item-container bg-white row cursor-pointer card-custom"
    @click="emit('clickItem', bookingItem)"
  >
    <div class="fit overflow-hidden">
      <q-img
        class="fit card-custom_image"
        :src="background"
        :alt="`booking_item_${bookingItem.id}`"
      />
    </div>
    <q-card-section class="full-width">
      <div class="row justify-between items-center q-mb-md no-wrap">
        <q-item-label class="text-h6 text-weight-medium ellipsis q-mr-md">
          {{ bookingItem.name }}
        </q-item-label>
        <div class="q-pa-xs flex-center booking-item-content_btn text-primary">
          <q-item-label class="text-weight-medium text-subtitle1 text-no-wrap">
            ${{ bookingItem.amount }}/Per night
          </q-item-label>
        </div>
      </div>
      <div class="row">
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon name="fa-solid fa-person" class="q-mr-xs" size="24px" />
          <q-item-label>
            {{ bookingItem.information.adultNumber }} Adults
          </q-item-label>
        </div>
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon
            name="fa-solid fa-child-reaching"
            class="q-mr-xs"
            size="24px"
          />
          <q-item-label>
            {{ bookingItem.information.childrenNumber }} Children
          </q-item-label>
        </div>
        <div class="row flex-center q-pa-sm q-mr-xs text-grey-9">
          <q-icon name="fa-solid fa-expand" class="q-mr-xs" size="24px" />
          <q-item-label> {{ bookingItem.information.acreage }} ft</q-item-label>
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
</style>
