<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { computed, onMounted, ref } from "vue";
import AmenityItem from "pages/room/components/AmenityItem.vue";
import RoomDetailServicePrice from "pages/room/views/RoomDetailServicePrice.vue";
import { formatDate, getRangeDate } from "src/utils";
import { useI18n } from "vue-i18n";

const { room } = defineProps({
  room: Object,
});

const { t } = useI18n();

const amenityList = [
  {
    icon: "fa-solid fa-snowflake",
    name: "Harmonic",
  },
  {
    icon: "fa-solid fa-tv",
    name: "Big Screen tv",
  },
  {
    icon: "fa-solid fa-wifi",
    name: "Wifi",
  },
  {
    icon: "fa-solid fa-car",
    name: "Free Parking",
  },
  {
    icon: "fa-solid fa-key",
    name: "Door Key",
  },
  {
    icon: "fa-solid fa-martini-glass",
    name: "Coffe Marker",
  },
  {
    icon: "fa-solid fa-toilet-paper",
    name: "Tissue Box",
  },
  {
    icon: "fa-solid fa-wind",
    name: "Hairdryer",
  },
];
const dateModel = ref(new Date());
const yesterday = computed(() => {
  return new Date().setDate(new Date().getDate() - 1);
});

function events(date) {
  if (formatDate(date) === formatDate(dateModel.value)) return true;
  const isSunday = new Date(date).getDay() === 6;
  const isThursday = new Date(date).getDay() === 3;
  return isSunday || isThursday;
}

function eventColor(date) {
  if (formatDate(date) === formatDate(dateModel.value)) return "primary";
  const isSunday = new Date(date).getDay() === 6;
  const isThursday = new Date(date).getDay() === 3;
  if (isSunday) return "negative";
  if (isThursday) return "positive";
}
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-md-6 col-xs-12">
      <section-title :title="t('roomDetail.titleLabel.overview')">
        <p class="text-subtitle1 text-gey-9">
          {{ room.description }}
        </p>
      </section-title>
      <section-title :title="t('roomDetail.titleLabel.freeAmenities')">
        <div class="row q-col-gutter-lg">
          <div
            class="col-xs-6 col-sm-4 col-md-3"
            v-for="item in amenityList"
            :key="item.icon"
          >
            <amenity-item :amenity="item" />
          </div>
        </div>
      </section-title>
    </div>
    <div class="col-md-6 col-xs-12">
      <section-title :title="t('roomDetail.titleLabel.roomAvailable')">
        <div class="q-pb-sm row">
          <q-badge color="primary" class="q-mr-sm q-py-xs q-py-sm">
            Today
          </q-badge>
          <q-badge color="positive" class="q-mr-sm q-py-xs q-py-sm">
            Available
          </q-badge>
          <q-badge color="negative" class="q-mr-sm q-py-xs q-py-sm">
            Unavailable
          </q-badge>
        </div>
        <div>
          <q-date
            v-model="dateModel"
            class="fit shadow-0 custom-shadow"
            :events="events"
            :event-color="eventColor"
            :options="getRangeDate(yesterday, null)"
          />
        </div>
      </section-title>
      <section-title :title="t('roomDetail.titleLabel.roomServicePrice')">
        <room-detail-service-price />
      </section-title>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
