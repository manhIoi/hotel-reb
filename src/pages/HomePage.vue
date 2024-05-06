<script setup>
import { useI18n } from "vue-i18n"
import {ref} from "vue";
import OutStandingItem from "components/OutStandingItem.vue";
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import {generateHomeData} from "src/server/home-data";
import RoomBookingCardItem from "components/RoomBookingCardItem.vue";
import PlaceNearbyItem from "components/PlaceNearbyItem.vue";
import PlaceNearbyCardItem from "components/PlaceNearbyCardItem.vue";
const { t } = useI18n();
const homeData = generateHomeData();
const { title, description, outstandingList, placeNearbyList, roomBookingList, slideImageList, commentList } = homeData
const [ firstBookingItem, ...otherBookingItem] = roomBookingList
const [ firstPlaceNearbyItem, ...otherPlaceNearbyItem] = placeNearbyList
const slide = ref(0);

</script>

<template>
  <q-page>
    <main-wrapper>
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        autoplay
        class="br-sm"
      >
        <q-carousel-slide v-for="(item, index) in slideImageList" :name=index :img-src=item :key="item" />
      </q-carousel>
      <div class="row outstanding-list q-ma-lg">
        <div v-for="(item, index) in outstandingList" :key="`${item.title}_${index}`" class="col-md-4 col-xs-12 q-pa-md">
          <out-standing-item :title="item.title" :value="item.value" />
        </div>
      </div>
    </main-wrapper>
    <main-wrapper background-color="bg-grey-1">
      <section-title title="OUR FAVORITE ROOMS">
        <template v-slot:right-title>
          View more
        </template>
        <div class="row q-col-gutter-lg">
          <div class="col-md-6 col-xs-12">
            <room-booking-card-item  :booking-item="firstBookingItem" />
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="row q-col-gutter-lg">
              <div class="col-6" v-for="item in otherBookingItem" :key="`booking_card_item_${item.id}`">
                <room-booking-card-item :booking-item="item" />
              </div>
            </div>
          </div>
        </div>
      </section-title>
    </main-wrapper>

    <main-wrapper>
      <section-title title="OUR SERVICE">
        <template v-slot:right-title>
          <p>View more</p>
        </template>
      </section-title>
    </main-wrapper>

    <main-wrapper background-color="bg-grey-1">
      <section-title title="PLACES NEARBY" center-title>
        <div class="row q-col-gutter-lg">
          <div class="col-md-6 col-xs-12">
            <place-nearby-card-item :nearby-item="firstPlaceNearbyItem" />
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="row q-col-gutter-lg">
              <div class="col-6" v-for="item in otherPlaceNearbyItem" :key="`place_nearby_item_${item.id}`">
                <place-nearby-card-item :nearby-item="item" />
              </div>
            </div>
          </div>
        </div>
      </section-title>
    </main-wrapper>

    <main-wrapper>
      <section-title title="OUR GUESTS LOVE US" center-title>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
              <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </section-title>
    </main-wrapper>
  </q-page>
</template>

<style lang="css" >
</style>



