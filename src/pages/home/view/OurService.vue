<script setup>
import ServiceItem from "pages/home/components/ServiceItem.vue";
import ServiceImageList from "pages/home/components/ServiceImageList.vue";
import { computed, ref, watch } from "vue";
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const serviceCategoryList = [
  {
    title: t("home.categoriesTitle.spa"),
    desc: t("home.categoriesDesc.spa"),
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
    title: t("home.categoriesTitle.restaurant"),
    desc: t("home.categoriesDesc.restaurant"),
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
    title: t("home.categoriesTitle.suite"),
    desc: t("home.categoriesDesc.suite"),
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
    title: t("home.categoriesTitle.swim"),
    desc: t("home.categoriesDesc.swim"),
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
  <section-title title="OUR SERVICE">
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
      <service-image-list
        :service="serviceCategoryList[selectedServiceIndex]"
      />
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
