<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import { useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";
import server from "src/server";
import BranchRoomList from "pages/branch/views/BranchRoomList.vue";
import BranchNearbyPlaceList from "pages/branch/views/BranchNearbyPlaceList.vue";
import BranchCommentList from "pages/branch/views/BranchCommentList.vue";
import { onMounted, ref } from "vue";
import SectionTitleSkeleton from "components/skeleton/section-title-skeleton.vue";

const router = useRouter();

function onClickRoomBookingItem(item) {
  router.push(ROUTES_PATH.roomDetail);
}

const branchData = ref({
  roomBookingList: null,
  placeNearbyList: null,
  commentList: null,
});

onMounted(async () => {
  try {
    const response = await server.getDetailBranchData();
    const { roomBookingList, placeNearbyList, commentList } =
      response.data || {};

    branchData.value.placeNearbyList = placeNearbyList;
    branchData.value.roomBookingList = roomBookingList;
    branchData.value.commentList = commentList;
  } catch (e) {}
});
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper background-color="bg-grey-2">
      <section-title-skeleton :is-show="!branchData.roomBookingList">
        <branch-room-list :room-booking-list="branchData.roomBookingList" />
      </section-title-skeleton>
    </main-wrapper>
    <main-wrapper background-color="bg-white">
      <section-title-skeleton :is-show="!branchData.placeNearbyList">
        <branch-nearby-place-list
          :place-nearby-list="branchData.placeNearbyList"
        />
      </section-title-skeleton>
    </main-wrapper>
    <main-wrapper background-color="bg-grey-2">
      <branch-comment-list :comment-list="branchData.commentList" />
    </main-wrapper>
  </q-page>
</template>

<style scoped lang="css"></style>
