<script setup>

import RoomBookingCardItem from "components/RoomBookingCardItem.vue";
import SectionTitle from "components/SectionTitle.vue";
const { roomBookingList } = defineProps({
  roomBookingList: Array
})

const [ firstBookingItem, ...otherBookingItem] = roomBookingList

</script>

<template>
  <section-title title="OUR FAVORITE ROOMS">
    <template v-slot:right-title>
      View more
    </template>
    <div class="row q-col-gutter-lg">
      <div class="col-md-6 col-xs-12">
        <room-booking-card-item  :booking-item="firstBookingItem" />
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row q-col-gutter-lg">
          <div class="col-6" v-for="item in otherBookingItem" :key="`booking_card_item_${item.id}`">
            <room-booking-card-item :booking-item="item" />
          </div>
        </div>
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css">

</style>
