<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import RoomBookingDetailItem from "components/RoomBookingDetailItem.vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";
import server from "src/server";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputCounter from "components/input/InputCounter.vue";
import InputBase from "components/input/InputBase.vue";
import { debounce } from "lodash";
import { useBranchStore } from "stores/branch-store";
import { useLoading } from "src/composables";

const router = useRouter();
const route = useRoute();
const filterData = ref({
  branch: {
    name: "",
    id: "",
  },
  dateCheckIn: "",
  dateCheckOut: "",
  adultNumber: 0,
  childrenNumber: 0,
  bedNumber: 0,
  currentPage: 1,
});

const branchStore = useBranchStore();
const { isLoading, hideLoading, showLoading } = useLoading();

const roomBookingList = ref([]);
const totalPage = ref(0);

function onClickItem(item) {
  router.push(`${ROUTES_PATH.roomDetail}/${item.id}`);
}

watch(filterData.value, () => {
  debounce(() => {
    router.replace({
      query: {
        ...filterData.value,
        branch: filterData.value?.branch?.id || "",
      },
    });
  }, 1000)();
});

watchEffect(async () => {
  if (route.query) {
    const {
      currentPage,
      branch,
      dateCheckIn,
      dateCheckOut,
      adultNumber,
      childrenNumber,
      bedNumber,
    } = route.query;
    filterData.value.branch = branchStore.branchList?.find?.(
      (item) => item?.id === branch
    );
    filterData.value.dateCheckIn = dateCheckIn;
    filterData.value.dateCheckOut = dateCheckOut;
    filterData.value.bedNumber = parseInt(bedNumber || "0");
    filterData.value.adultNumber = parseInt(adultNumber || "0");
    filterData.value.childrenNumber = parseInt(childrenNumber || "0");
    filterData.value.currentPage = parseInt(currentPage || "1");
    try {
      showLoading();
      const response = await server.getRoomListBySearchParams(route.query);
      const { totalPage: _totalPage = 0, roomList = [] } = response.data || {};
      roomBookingList.value = roomList;
      totalPage.value = _totalPage;
    } catch (e) {
    } finally {
      hideLoading();
    }
  }
});
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="search-picker q-pa-md bg-white">
        <section-title center-title title="Search picker">
          <div class="row q-col-gutter-lg q-pa-md">
            <div class="col-md-4 col-xs-6">
              <input-base label="Branch">
                <q-select
                  outlined
                  v-model="filterData.branch"
                  :options="branchStore.branchList"
                  option-value="id"
                  option-label="name"
                  label="Select branch"
                />
              </input-base>
            </div>
            <div class="col-md-4 col-xs-6">
              <input-date-picker
                label="Check In"
                v-model="filterData.dateCheckIn"
              />
            </div>
            <div class="col-md-4 col-xs-6">
              <input-date-picker
                label="Check Out"
                v-model="filterData.dateCheckOut"
              />
            </div>
            <div class="col-md-4 col-xs-6">
              <input-counter label="Adults" v-model="filterData.adultNumber" />
            </div>
            <div class="col-md-4 col-xs-6">
              <input-counter
                label="Childrens"
                v-model="filterData.childrenNumber"
              />
            </div>
            <div class="col-md-4 col-xs-6">
              <input-counter label="Bed rooms" v-model="filterData.bedNumber" />
            </div>
          </div>
        </section-title>
      </div>
      <section-title center-title title="Search result">
        <div v-if="isLoading" class="flex column flex-center q-pa-md">
          <q-spinner-gears color="primary" size="100px" />
          <p>Loading...</p>
        </div>

        <div v-else class="row q-gutter-lg">
          <q-intersection
            v-for="item in roomBookingList"
            :key="item?.id"
            transition="scale"
            once
          >
            <div class="col-12">
              <room-booking-detail-item
                :booking-item="item"
                @click-item="onClickItem"
              />
            </div>
          </q-intersection>
        </div>
      </section-title>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="filterData.currentPage"
          :max="totalPage"
          :max-pages="5"
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
