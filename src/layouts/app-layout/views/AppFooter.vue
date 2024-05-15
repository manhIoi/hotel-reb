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
        <p class="text-weight-bolder text-h6 q-mb-md">
          {{ t("appFooter.about") }}
        </p>
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-envelope" size="24px" />
          <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">
            roomb@gmail.com
          </p>
        </div>
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-phone" size="24px" />
          <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">
            +8412345677
          </p>
        </div>
        <div class="row items-center">
          <q-icon name="fa-solid fa-location-dot" size="24px" />
          <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">
            189 Thai Phien Street, Ho Chi Minh City
          </p>
        </div>
      </div>
      <div class="col-md-4 col-xs-12">
        <p class="text-weight-bolder text-h6 q-mb-md">
          {{ t("appFooter.stayInTouch") }}
        </p>
        <div class="row">
          <q-btn size="lg" flat icon="fa-brands fa-facebook" />
          <q-btn size="lg" flat icon="fa-brands fa-instagram" />
          <q-btn size="lg" flat icon="fa-brands fa-twitch" />
        </div>
      </div>
      <div class="col-md-4 col-xs-12">
        <p class="text-weight-bolder text-h6 q-mb-md">
          {{ t("appFooter.links") }}
        </p>
        <div class="flex full-width">
          <div
            v-for="item in footerNavigationList"
            v-bind:key="item.link"
            class="q-py-md link-item"
          >
            <router-link class="text-white text-body1" :to="item.link"
              >{{ t(item.title) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-8" />
    <p>{{ t("appFooter.copyRight") }}</p>
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
