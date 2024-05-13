<script setup>
import ServiceItem from "pages/home/components/ServiceItem.vue";
import ServiceImageList from "pages/home/components/ServiceImageList.vue";
import { computed, ref, watch } from "vue";

const serviceCategoryList = [
  {
    title: "SPA & WELLNESS",
    desc: "Open Daily",
    icon: "fa-solid fa-spa",
    color: "#81BF32",
    images: [
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-01v.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-02.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-04.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-03.jpg",
    ],
  },
  {
    title: "TOP RESTAURANT",
    desc: "Breakfast & Dinner",
    icon: "fa-solid fa-utensils",
    color: "#BF380E",
    images: [
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-02v.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-05.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-06.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-07.jpg",
    ],
  },
  {
    title: "BEST SUITES",
    desc: "Cool View",
    icon: "fa-solid fa-suitcase",
    color: "#063C43",
    images: [
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-03v.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-08.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-09.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-10.jpg",
    ],
  },
  {
    title: "SWIMMING POOL",
    desc: "Open Daily",
    icon: "fa-solid fa-person-swimming",
    color: "#0DAEC3",
    images: [
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-04v.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-11.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-13.jpg",
      "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/services-home3-12.jpg",
    ],
  },
];

const selectedServiceIndex = ref(0);

function onClickServiceItem(index) {
  selectedServiceIndex.value = index;
}
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div
      class="col-md-3 col-xs-6"
      v-for="(item, index) in serviceCategoryList"
      :key="`service_${item.title}`"
    >
      <service-item
        :service="item"
        @click="() => onClickServiceItem(index)"
        :style="{
          backgroundColor:
            selectedServiceIndex === index ? '#81BF321A' : 'transparent',
        }"
      />
    </div>
  </div>
  <div style="padding: 60px 0">
    <service-image-list :service="serviceCategoryList[selectedServiceIndex]" />
  </div>
</template>

<style scoped lang="css"></style>
