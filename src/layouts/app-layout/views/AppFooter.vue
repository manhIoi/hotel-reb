<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import { useI18n } from "vue-i18n";
import { footerNavigationList } from "layouts/NavigationRoutes";

const { t } = useI18n();
</script>

<template>
  <main-wrapper class="footer">
    <div class="row q-col-gutter-lg">
      <div class="col-md-4 col-xs-12">
        <q-item-label class="text-weight-bolder text-h5 q-mb-lg">
          {{ t("appFooter.about") }}
        </q-item-label>
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-envelope" size="18px" />
          <q-item-label class="text-white q-ml-sm text-weight-regular">
            roomb@gmail.com
          </q-item-label>
        </div>
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-phone" size="18px" />
          <q-item-label class="text-white q-ml-sm text-weight-regular">
            +8412345677
          </q-item-label>
        </div>
        <div class="row items-center">
          <q-icon name="fa-solid fa-location-dot" size="18px" />
          <q-item-label class="text-white q-ml-sm text-weight-regular">
            189 Thai Phien Street, Ho Chi Minh City
          </q-item-label>
        </div>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-item-label class="text-weight-bolder text-h5 q-mb-lg">
          {{ t("appFooter.stayInTouch") }}
        </q-item-label>
        <div class="row">
          <q-icon
            class="cursor-pointer icon-zoom q-mr-lg"
            size="24px"
            name="fa-brands fa-facebook"
          />
          <q-icon
            class="cursor-pointer icon-zoom q-mr-lg"
            size="24px"
            name="fa-brands fa-instagram"
          />
          <q-icon
            class="cursor-pointer icon-zoom q-mr-lg"
            size="24px"
            name="fa-brands fa-twitch"
          />
        </div>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-item-label class="text-weight-bolder text-h5 q-mb-lg">
          {{ t("appFooter.links") }}
        </q-item-label>
        <div class="flex full-width">
          <div
            v-for="item in footerNavigationList"
            v-bind:key="item.link"
            class="q-mb-md link-item"
          >
            <router-link class="text-white" :to="item.link">
              {{ t(item.title) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-8" />
    <q-item-label>{{ t("appFooter.copyRight") }}</q-item-label>
  </main-wrapper>
</template>

<style scoped lang="css">
.footer {
  background-color: var(--footer-color) !important;
  padding: 60px 0;
}

.link-item {
  flex: 1;
  flex-basis: 120px;
}
</style>
