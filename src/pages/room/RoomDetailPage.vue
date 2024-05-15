<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import { useRoute, useRouter } from "vue-router";
import SectionTitle from "components/SectionTitle.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import RoomDetailBookingForm from "pages/room/views/RoomDetailBookingForm.vue";
import server, {
  generateRoomBooking,
  generateRoomBookingList,
} from "src/server";
import RoomDetailImageList from "pages/room/views/RoomDetailImageList.vue";
import RoomDetailInformation from "pages/room/views/RoomDetailInformation.vue";
import RoomDetailSuggestList from "pages/room/views/RoomDetailSuggestList.vue";
import RoomDetailHeader from "pages/room/views/RoomDetailHeader.vue";
import SectionTitleSkeleton from "components/skeleton/SectionTitleSkeleton.vue";
import { useLoading } from "src/composables";

const router = useRouter();
const route = useRoute();

const roomData = ref(null);
const { hideLoading, showLoading, isLoading } = useLoading(true);

watchEffect(async () => {
  if (route.params?.id) {
    try {
      showLoading();
      const response = await server.getRoomBookingDetail(route.params?.id);
      roomData.value = response.data;
    } catch (e) {
    } finally {
      hideLoading();
    }
  }
});

const dialogBooking = ref(false);
const fabRight = ref(false);
</script>

<template>
  <q-page class="bg-grey-2">
    <section-title-skeleton :is-show="isLoading">
      <room-detail-header :room="roomData" />
    </section-title-skeleton>
    <main-wrapper background-color="bg-white">
      <section-title-skeleton :is-show="isLoading">
        <room-detail-image-list :image-list="roomData.images" />
      </section-title-skeleton>
    </main-wrapper>
    <main-wrapper background-color="bg-white" style="padding-bottom: 90px">
      <section-title-skeleton :is-show="isLoading">
        <room-detail-information :room="roomData" />
      </section-title-skeleton>
    </main-wrapper>
    <main-wrapper background-color="bg-grey-2">
      <section-title-skeleton :is-show="isLoading">
        <room-detail-suggest-list :roomList="roomData.suggestRoomList" />
      </section-title-skeleton>
    </main-wrapper>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        v-model="fabRight"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action
          label-position="top"
          q-fab-action
          external-label
          color="primary"
          icon="edit_square"
          label="Book now"
          @click="dialogBooking = true"
        />
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="dialogBooking">
      <section-title-skeleton :is-show="isLoading">
        <room-detail-booking-form
          :room="roomData"
          v-model:dialog="dialogBooking"
        />
      </section-title-skeleton>
    </q-dialog>
  </q-page>
</template>

<style scoped lang="css"></style>
