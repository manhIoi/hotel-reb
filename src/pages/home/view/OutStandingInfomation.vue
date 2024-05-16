<script setup>
import OutStandingItem from "pages/home/components/OutStandingItem.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { slideImageList = [], outstandingList = [] } = defineProps({
  slideImageList: Array,
  outstandingList: Array,
});

const slide = ref(0);
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-md-6 col-xs-12">
      <div class="fit flex items-center">
        <q-item-label
          class="text-primary text-weight-bold text-subtitle1 q-mb-lg"
        >
          {{ t("home.welcome") }}
        </q-item-label>
        <q-item-label class="text-weight-bold text-h3 q-mb-lg">
          {{ t("home.title") }}
        </q-item-label>
        <q-item-label class="text-h6 text-grey-8" style="line-height: 2.4rem">
          {{ t("home.description") }}
        </q-item-label>
      </div>
    </div>
    <div class="col-md-6 col-xs-12">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        autoplay
        class="br-sm"
      >
        <q-carousel-slide
          v-for="(item, index) in slideImageList"
          :name="index"
          :img-src="item"
          :key="item"
        />
      </q-carousel>
    </div>
  </div>
  <div class="row">
    <div
      v-for="(item, index) in outstandingList"
      :key="`${item.title}_${index}`"
      class="col-md-4 col-xs-12 q-pa-md"
    >
      <out-standing-item :title="item.title" :value="item.value" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
