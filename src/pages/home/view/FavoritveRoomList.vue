<script setup>
import RoomBookingCardItem from "components/RoomBookingCardItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { ROUTES_PATH } from "src/router/routes";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { roomBookingList } = defineProps({
  roomBookingList: Array,
});
const { t } = useI18n();
const router = useRouter();

const [firstBookingItem, ...otherBookingItem] = roomBookingList;

function onClickItem(item) {
  router.push(`${ROUTES_PATH.roomDetail}/${item?.id}`);
}

function onClickViewMore() {
  router.push(ROUTES_PATH.search);
}
</script>

<template>
  <section-title :title="t('home.ourFavoriteRoom')">
    <template v-slot:right-title>
      <q-btn
        flat
        outline
        color="primary"
        icon-right="arrow_right_alt"
        label="View more"
        class="text-weight-bold"
        @click="onClickViewMore"
      />
    </template>
    <div class="row q-col-gutter-lg">
      <div class="col-md-6 col-xs-12">
        <room-booking-card-item
          :booking-item="firstBookingItem"
          @click-item="onClickItem"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row q-col-gutter-lg">
          <div
            class="col-6"
            v-for="item in otherBookingItem"
            :key="`booking_card_item_${item.id}`"
          >
            <room-booking-card-item
              :booking-item="item"
              @click-item="onClickItem"
            />
          </div>
        </div>
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
