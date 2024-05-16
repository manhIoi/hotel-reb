<script setup>
const emit = defineEmits(["clickItem"]);
const { bookingItem } = defineProps({
  bookingItem: Object,
});
const background = bookingItem.images[0];
</script>

<template>
  <q-card
    flat
    class="full-height full-width cursor-pointer"
    @click="emit('clickItem', bookingItem)"
  >
    <q-img :src="background" class="full-width full-height">
      <div class="absolute-top-left q-pa-md bg-transparent">
        <div class="bg-white br-xs">
          <q-item-label class="text-weight-medium text-primary q-px-md q-py-sm">
            ${{ bookingItem.amount }}/night
          </q-item-label>
        </div>
      </div>
      <div class="card-info absolute-bottom text-subtitle2">
        <q-item-label class="text-weight-medium text-white text-h6">
          {{ bookingItem.name }}
        </q-item-label>
        <div class="row flex wrap">
          <div class="row flex-center q-mr-sm">
            <q-icon name="fa-solid fa-person" size="18px" class="q-mr-xs" />
            <q-item-label class="text-subtitle2 text-weight-regular">
              {{ bookingItem.information.adultNumber }} Adults
            </q-item-label>
          </div>
          <div class="row flex-center q-mr-sm">
            <q-icon
              name="fa-solid fa-child-reaching"
              size="18px"
              class="q-mr-xs"
            />
            <q-item-label class="text-subtitle2 text-weight-regular">
              {{ bookingItem.information.childrenNumber }} Children
            </q-item-label>
          </div>
          <div class="row flex-center q-mr-sm">
            <q-icon name="fa-solid fa-expand" size="18px" class="q-mr-xs" />
            <q-item-label class="text-subtitle2 text-weight-regular">
              {{ bookingItem.information.acreage }} ft
            </q-item-label>
          </div>
        </div>
      </div>
    </q-img>
  </q-card>
</template>

<style scoped lang="css">
.card-info {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>
