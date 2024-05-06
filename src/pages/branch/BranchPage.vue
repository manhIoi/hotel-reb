<script setup>

import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import {useRouter} from "vue-router";
import {ROUTES_PATH} from "src/router/routes";
import {generatePlaceNearByList, generateRoomBookingList} from "src/server";
import BranchRoomList from "pages/branch/views/BranchRoomList.vue";
import BranchNearbyPlaceList from "pages/branch/views/BranchNearbyPlaceList.vue";

const router = useRouter()

function onClickRoomBookingItem(item) {
  router.push(ROUTES_PATH.roomDetail)
}

const roomBookingList = generateRoomBookingList(6);
const placeNearbyList = generatePlaceNearByList(4);

</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <branch-room-list :room-booking-list="roomBookingList"/>
    </main-wrapper>
    <main-wrapper>
      <branch-nearby-place-list :place-nearby-list="placeNearbyList"/>
    </main-wrapper>
    <main-wrapper>
      <SectionTitle title="OUR GUESTS LOVE US" center-title>
        Hello
      </SectionTitle>
    </main-wrapper>
  </q-page>
</template>

<style scoped lang="css">

</style>
