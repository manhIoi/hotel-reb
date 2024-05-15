<script setup>
import { ROUTES_PATH } from "src/router/routes";
import RoomBookingCompactItem from "components/RoomBookingCompactItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { roomBookingList } = defineProps({
  roomBookingList: Array,
});

const router = useRouter();
const { t } = useI18n();

function onClickRoomBookingItem(item) {
  router.push(`${ROUTES_PATH.roomDetail}/${item.id}`);
}
</script>

<template>
  <SectionTitle :title="t('branch.ourFavoriteRoom')">
    <div class="row q-col-gutter-lg">
      <div
        v-for="item in roomBookingList"
        :key="`favorite_${item.id}`"
        class="col-lg-4 col-md-6 col-xs-12"
      >
        <room-booking-compact-item
          :booking-item="item"
          @click-item="onClickRoomBookingItem"
        />
      </div>
    </div>
  </SectionTitle>
</template>

<style scoped lang="css"></style>
