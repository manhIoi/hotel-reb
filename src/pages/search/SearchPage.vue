<script setup>

import {onMounted, reactive, ref, watch, watchEffect} from "vue";
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import RoomBookingDetailItem from "components/RoomBookingDetailItem.vue";
import {useRoute, useRouter} from "vue-router";
import {ROUTES_PATH} from "src/router/routes";
import {generateRoomBookingList} from "src/server";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputCounter from "components/input/InputCounter.vue";

const router = useRouter();
const route = useRoute();
const filterData = ref({
  branch: '',
  dateCheckIn: '',
  dateCheckOut: '',
  adultNumber: 0,
  childrenNumber: 0,
  bedNumber: 0
})

const currentPage = ref(1);
const branchOptions = ['Branch 1', 'Branch 2', 'Branch 3']

const roomBookingList = ref(generateRoomBookingList(10));

function onClickItem(item) {
  router.push(ROUTES_PATH.roomDetail)
}

watch(filterData.value, () => {
  router.replace({ query: { ...filterData.value } })
})

watchEffect(() => {
  if (route.query) {
    roomBookingList.value = generateRoomBookingList(3);
    filterData.value = {
      branch: route.query.branch,
      dateCheckIn: route.query.dateCheckIn,
      dateCheckOut: route.query.dateCheckOut,
      adultNumber: parseInt(route.query.adutNumber || '0'),
      childrenNumber: parseInt(route.query.childrenNumber || '0'),
      bedNumber: parseInt(route.query.bedNumber || '0')
    }
  }
})

</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="search-picker q-pa-md bg-white">
        <section-title center-title title="Search picker">
          <div class="row q-col-gutter-lg q-pa-md">
            <div class="col-md-4 col-xs-12">
              <q-select outlined v-model="filterData.branch" :options="branchOptions" label="Select branch" />
            </div>
            <div class="col-md-4 col-xs-12">
              <input-date-picker v-model="filterData.dateCheckIn" />
            </div>
            <div class="col-md-4 col-xs-12">
              <input-date-picker v-model="filterData.dateCheckOut" />
            </div>
            <div class="col-md-4 col-xs-12">
              <input-counter v-model="filterData.adultNumber" />
            </div>
            <div class="col-md-4 col-xs-12">
              <input-counter v-model="filterData.childrenNumber" />
            </div>
            <div class="col-md-4 col-xs-12">
              <input-counter v-model="filterData.bedNumber" />
            </div>
          </div>
        </section-title>
      </div>
      <section-title center-title title="Search result" >
        <div class="row q-gutter-lg">
          <q-intersection
            v-for="item in roomBookingList"
            :key="item?.id"
            transition="scale"
            once
          >
            <div class="col-12">
              <room-booking-detail-item :booking-item="item"  @click-item="onClickItem" />
            </div>
          </q-intersection>
        </div>

      </section-title>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="currentPage"
          :max="5"
          direction-links
        />
      </div>
    </main-wrapper>
  </q-page>
</template>

<style lang="css">
.search-picker {
  border-radius: 8px;
}
</style>

