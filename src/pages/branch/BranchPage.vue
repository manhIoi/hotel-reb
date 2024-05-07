<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";
import { generatePlaceNearByList, generateRoomBookingList } from "src/server";
import BranchRoomList from "pages/branch/views/BranchRoomList.vue";
import BranchNearbyPlaceList from "pages/branch/views/BranchNearbyPlaceList.vue";
import BranchCommentList from "pages/branch/views/BranchCommentList.vue";
import { generateCommentList } from "src/server/comment";

const router = useRouter();

function onClickRoomBookingItem(item) {
  router.push(ROUTES_PATH.roomDetail);
}

const roomBookingList = generateRoomBookingList(6);
const placeNearbyList = generatePlaceNearByList(4);
const commentList = generateCommentList(5);
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper background-color="bg-white">
      <branch-room-list :room-booking-list="roomBookingList" />
    </main-wrapper>
    <main-wrapper background-color="bg-grey-1">
      <branch-nearby-place-list :place-nearby-list="placeNearbyList" />
    </main-wrapper>
    <main-wrapper background-color="bg-white">
      <branch-comment-list :comment-list="commentList" />
    </main-wrapper>
  </q-page>
</template>

<style scoped lang="css"></style>
