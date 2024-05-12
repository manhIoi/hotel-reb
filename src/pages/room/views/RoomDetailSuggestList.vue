<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { computed, ref } from "vue";
import RoomBookingCompactItem from "components/RoomBookingCompactItem.vue";
import { useQuasar } from "quasar";

const slide = ref(0);
const $q = useQuasar();

const { roomList } = defineProps({
  roomList: Array,
});

const numOfItemInRow = computed(() => {
  return $q.screen.gt.sm ? 3 : 1;
});

const _roomList = computed(() => {
  let tmp = [];
  return roomList.reduce((current, item, index) => {
    tmp.push(item);
    if (tmp.length === numOfItemInRow.value) {
      current.push(tmp);
      tmp = [];
    }
    return current;
  }, []);
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
        v-for="(item, index) in _roomList"
        :name="index"
        :key="`room_suggest_${index}`"
      >
        <div class="row q-col-gutter-lg">
          <div
            v-for="subItem in item"
            class="col-md-4 col-xs-12"
            :key="`room_suggest_${subItem?.id}`"
          >
            <room-booking-compact-item :booking-item="subItem" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section-title>
</template>

<style scoped lang="css"></style>
