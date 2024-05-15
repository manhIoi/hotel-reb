<script setup>
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import MainWrapper from "layouts/MainWrapper.vue";
import OutStandingInfomation from "pages/home/view/OutStandingInfomation.vue";
import FavoritveRoomList from "pages/home/view/FavoritveRoomList.vue";
import RecommendPlaceNearbyList from "pages/home/view/RecommendPlaceNearbyList.vue";
import BestCommentList from "pages/home/view/BestCommentList.vue";
import server from "src/server";
import SectionTitleSkeleton from "components/skeleton/SectionTitleSkeleton.vue";
import OurService from "pages/home/view/OurService.vue";

const { t } = useI18n();
const homeData = ref({
  slideImageList: null,
  outstandingList: null,
  placeNearbyList: null,
  roomBookingList: null,
  commentList: null,
});

onMounted(async () => {
  try {
    const response = await server.getHomeData();
    homeData.value = { ...response.data };
  } catch (e) {}
});
</script>

<template>
  <q-page>
    <div>
      <main-wrapper>
        <section-title-skeleton
          :is-show="!homeData.slideImageList || !homeData.outstandingList"
        >
          <out-standing-infomation
            :slide-image-list="homeData.slideImageList"
            :outstanding-list="homeData.outstandingList"
          />
        </section-title-skeleton>
      </main-wrapper>
      <main-wrapper background-color="bg-grey-2">
        <section-title-skeleton :is-show="!homeData.roomBookingList">
          <favoritve-room-list :room-booking-list="homeData.roomBookingList" />
        </section-title-skeleton>
      </main-wrapper>

      <main-wrapper>
        <section-title-skeleton :is-show="!homeData.roomBookingList">
          <our-service />
        </section-title-skeleton>
      </main-wrapper>

      <main-wrapper background-color="bg-grey-2">
        <section-title-skeleton :is-show="!homeData.placeNearbyList">
          <recommend-place-nearby-list
            :place-nearby-list="homeData.placeNearbyList"
          />
        </section-title-skeleton>
      </main-wrapper>

      <main-wrapper>
        <section-title-skeleton :is-show="!homeData.commentList">
          <best-comment-list :comment-list="homeData.commentList" />
        </section-title-skeleton>
      </main-wrapper>
    </div>
  </q-page>
</template>

<style lang="css"></style>
