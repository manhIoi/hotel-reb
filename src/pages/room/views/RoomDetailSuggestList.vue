<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { ref } from "vue";
import RoomBookingCompactItem from "components/RoomBookingCompactItem.vue";
import RoomBookingDetailItem from "components/RoomBookingDetailItem.vue";

const slide = ref(0);

const { roomList } = defineProps({
  roomList: Array,
});
</script>

<template>
  <section-title
    center-title
    title="YOU MAY LIKE"
    background-color="bg-transparent"
  >
    <q-carousel
      animated
      v-model="slide"
      navigation
      control-color="primary"
      infinite
      autoplay
      class="bg-transparent"
      height="auto"
      padding
    >
      <q-carousel-slide
        v-for="(item, index) in roomList"
        :name="index"
        :key="`room_suggest_${item.id}`"
      >
        <div class="row q-col-gutter-lg">
          <div class="col-md-4 col-xs-12">
            <room-booking-compact-item :booking-item="item" />
          </div>
          <div class="col-md-4 col-xs-12">
            <room-booking-compact-item :booking-item="item" />
          </div>
          <div class="col-md-4 col-xs-12">
            <room-booking-compact-item :booking-item="item" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section-title>
</template>

<style scoped lang="css"></style>
