<script setup>
import { useI18n } from "vue-i18n"
import {computed, ref, watch} from "vue";
import OutStandingItem from "pages/home/components/OutStandingItem.vue";
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import {generateHomeData} from "src/server/home-data";
import RoomBookingCardItem from "components/RoomBookingCardItem.vue";
import PlaceNearbyItem from "components/PlaceNearbyItem.vue";
import PlaceNearbyCardItem from "components/PlaceNearbyCardItem.vue";
import CommentItem from "components/CommentItem.vue";
import {useQuasar} from "quasar";
import OutStandingInfomation from "pages/home/view/OutStandingInfomation.vue";
import FavoritveRoomList from "pages/home/view/FavoritveRoomList.vue";
import RecommendPlaceNearbyList from "pages/home/view/RecommendPlaceNearbyList.vue";
import BestCommentList from "pages/home/view/BestCommentList.vue";
const { t } = useI18n();
const $q = useQuasar()

const homeData = generateHomeData();
const { title, description, outstandingList, placeNearbyList, roomBookingList, slideImageList, commentList } = homeData;
const commentSlide = ref(0)

</script>

<template>
  <q-page>
    <main-wrapper>
      <out-standing-infomation :slide-image-list="slideImageList" :outstanding-list="outstandingList" />
    </main-wrapper>
    <main-wrapper background-color="bg-grey-1">
      <favoritve-room-list :room-booking-list="roomBookingList" />
    </main-wrapper>

    <main-wrapper>
      <section-title title="OUR SERVICE">
        <template v-slot:right-title>
          <p>View more</p>
        </template>
      </section-title>
    </main-wrapper>

    <main-wrapper background-color="bg-grey-1">
      <recommend-place-nearby-list :place-nearby-list="placeNearbyList" />
    </main-wrapper>

    <main-wrapper>
      <best-comment-list :comment-list="commentList" />
    </main-wrapper>
  </q-page>
</template>

<style lang="css" >
</style>



