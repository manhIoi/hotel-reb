<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import { useRoute, useRouter } from "vue-router";
import SectionTitle from "components/SectionTitle.vue";
import { ref } from "vue";
import RoomDetailBookingForm from "pages/room/views/RoomDetailBookingForm.vue";
import { generateRoomBooking, generateRoomBookingList } from "src/server";
import RoomDetailImageList from "pages/room/views/RoomDetailImageList.vue";
import RoomDetailInformation from "pages/room/views/RoomDetailInformation.vue";
import RoomDetailSuggestList from "pages/room/views/RoomDetailSuggestList.vue";
import RoomDetailHeader from "pages/room/views/RoomDetailHeader.vue";

const router = useRouter();
const route = useRoute();

const roomData = generateRoomBooking();
const roomList = generateRoomBookingList(6);
const { images } = roomData;

const dialogBooking = ref(false);
const fabRight = ref(false);
</script>

<template>
  <q-page class="bg-grey-2">
    <room-detail-header :room="roomData" />
    <main-wrapper background-color="bg-white">
      <room-detail-image-list :image-list="images" />
    </main-wrapper>
    <main-wrapper background-color="bg-white" style="padding-bottom: 90px">
      <room-detail-information :room="roomData" />
    </main-wrapper>
    <main-wrapper background-color="bg-grey-2">
      <room-detail-suggest-list :roomList="roomList" />
    </main-wrapper>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        v-model="fabRight"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action
          label-position="top"
          q-fab-action
          external-label
          color="primary"
          icon="edit_square"
          label="Book now"
          @click="dialogBooking = true"
        />
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="dialogBooking">
      <room-detail-booking-form />
    </q-dialog>
  </q-page>
</template>

<style scoped lang="css"></style>
