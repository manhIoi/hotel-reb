<script setup>
import PlaceNearbyCardItem from "components/PlaceNearbyCardItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { placeNearbyList } = defineProps({
  placeNearbyList: Array,
});
const { t } = useI18n();

const router = useRouter();

const [firstPlaceNearbyItem, ...otherPlaceNearbyItem] = placeNearbyList;

function onClickItem(item) {}
</script>

<template>
  <section-title :title="t('home.placeNearBy')" center-title>
    <div class="row q-col-gutter-lg">
      <div class="col-md-6 col-xs-12">
        <place-nearby-card-item :nearby-item="firstPlaceNearbyItem" />
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row q-col-gutter-lg">
          <div
            class="col-6"
            v-for="item in otherPlaceNearbyItem"
            :key="`place_nearby_item_${item.id}`"
          >
            <place-nearby-card-item :nearby-item="item" />
          </div>
        </div>
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
