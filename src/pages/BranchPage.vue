<script setup>

import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import RoomBookingCompactItem from "components/RoomBookingCompactItem.vue";
import PlaceNearbyItem from "components/PlaceNearbyItem.vue";
import {useRouter} from "vue-router";
import {ROUTES_PATH} from "src/router/routes";
import {generatePlaceNearByList, generateRoomBookingList} from "src/server";

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
      <SectionTitle title="OUR FAVORITE ROOMS">
        <div class="row q-col-gutter-lg">
          <q-intersection
            v-for="item in roomBookingList"
            :key="`favorite_${item.id}`"
            transition="scale"
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            once
          >
            <room-booking-compact-item :booking-item="item" @click-item="onClickRoomBookingItem"/>
          </q-intersection>
        </div>
      </SectionTitle>
    </main-wrapper>
    <main-wrapper>
      <SectionTitle title="PLACES NEARBY">
        <div class="row q-col-gutter-lg">
          <div
            v-for="item in placeNearbyList"
            :key="`nearby_${item}`"
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          >
            <place-nearby-item :nearby-item="item" />
          </div>
        </div>
      </SectionTitle>
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
