<script setup>
import { useI18n } from "vue-i18n"
import {ref} from "vue";
import OutStandingItem from "components/OutStandingItem.vue";
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
const { t } = useI18n();
const slide = ref(1)
const outstandingList = [
  {
    value: 50,
    title: 'abc'
  },
  {
    value: 50,
    title: 'abc'
  },
  {
    value: 50,
    title: 'abc'
  },
]

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
        class="carousel-list"
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
      <div class="row outstanding-list q-my-lg">
        <div v-for="(item, index) in outstandingList" :key="`${item.title}_${index}`" class="col-md-4 col-xs-12 q-pa-md">
          <out-standing-item :title="item.title" :value="item.value" />
        </div>
      </div>
    </main-wrapper>
    <section-title title="OUR FAVORITE ROOMS" background-color="bg-grey-3">
      <template v-slot:right-title>
        <p>View more</p>
      </template>
    </section-title>
    <section-title title="OUR SERVICE" background-color="bg-grey-3">
      <template v-slot:right-title>
        <p>View more</p>
      </template>
    </section-title>
  </q-page>
</template>

<style lang="css" >
.carousel-list {
  border-radius: 6px;
}
.outstanding-list {}
</style>



