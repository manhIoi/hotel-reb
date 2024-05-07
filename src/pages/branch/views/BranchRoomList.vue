<script setup>
import { ROUTES_PATH } from "src/router/routes";
import RoomBookingCompactItem from "components/RoomBookingCompactItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useRouter } from "vue-router";

const { roomBookingList } = defineProps({
  roomBookingList: Array,
});

const router = useRouter();

function onClickRoomBookingItem(item) {
  router.push(ROUTES_PATH.roomDetail);
}
</script>

<template>
  <SectionTitle title="OUR FAVORITE ROOMS">
    <div class="row q-col-gutter-lg">
      <q-intersection
        v-for="item in roomBookingList"
        :key="`favorite_${item.id}`"
        transition="scale"
        class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
        once
      >
        <room-booking-compact-item
          :booking-item="item"
          @click-item="onClickRoomBookingItem"
        />
      </q-intersection>
    </div>
  </SectionTitle>
</template>

<style scoped lang="css"></style>
