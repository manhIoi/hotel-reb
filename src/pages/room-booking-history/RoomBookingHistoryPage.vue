<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import RoomBookingHistoryTable from "pages/room-booking-history/views/RoomBookingHistoryTable.vue";
import RoomBookingHistoryNewTable from "pages/room-booking-history/views/RoomBookingHistoryNewTable.vue";
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper background-color="bg-white">
      <room-booking-history-new-table />
    </main-wrapper>
    <main-wrapper>
      <room-booking-history-table />
    </main-wrapper>
    <main-wrapper> </main-wrapper>
  </q-page>
</template>

<style scoped lang="css"></style>
