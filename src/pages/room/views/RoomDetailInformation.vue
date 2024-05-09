<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { ref } from "vue";
import AmenityItem from "pages/room/components/AmenityItem.vue";

const { room } = defineProps({
  room: Object,
});
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
const date = ref(new Date());

function events(date) {
  return (
    date === "2024/05/01" ||
    date === "2024/05/05" ||
    date === "2024/05/06" ||
    date === "2024/05/09" ||
    date === "2024/05/23"
  );
}
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-md-6 col-xs-12">
      <section-title title="Overview">
        <p class="text-subtitle1 text-gey-9">{{ room.description }}</p>
      </section-title>
      <section-title title="Free Amenities">
        <div class="row q-col-gutter-lg">
          <div
            class="col-xs-4 col-md-3"
            v-for="item in amenityList"
            :key="item.icon"
          >
            <amenity-item :amenity="item" />
          </div>
        </div>
      </section-title>
    </div>
    <div class="col-md-6 col-xs-12">
      <section-title title="Room Availability">
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
            class="fit"
            v-model="date"
            :events="events"
            :event-color="
              (date) => (date[9] % 2 === 0 ? 'positive' : 'negative')
            "
          />
        </div>
      </section-title>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
