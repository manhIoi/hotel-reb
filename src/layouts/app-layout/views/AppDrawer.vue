<script setup>
import { drawerNavigationList } from "layouts/NavigationRoutes";
import { ref, watchEffect } from "vue";
import { ROUTES_PATH } from "src/router/routes";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "stores/user-store";
import { useI18n } from "vue-i18n";

const router = useRouter();
const route = useRoute();
const selectedDrawerItemIndex = ref(-1);
const leftDrawerOpen = defineModel("leftDrawerOpen");
const userStore = useUserStore();
const { t } = useI18n();

watchEffect(() => {
  selectedDrawerItemIndex.value = drawerNavigationList.findIndex((item) => {
    if (route.path === ROUTES_PATH.home && item.link === ROUTES_PATH.home)
      return -1;
    return route.path.includes(item.link);
  });
});

function onClickLogo() {
  router.push({ name: ROUTES_PATH.home });
}

function onClickNavItem(item) {
  router.push({ name: item.link });
}

function onClickLogout() {
  userStore.logout().onOk(() => {
    leftDrawerOpen.value = false;
  });
}
</script>

<template>
  <div class="q-pa-lg bg-primary full-width">
    <div class="flex flex-center">
      <q-avatar
        size="32px"
        @click="onClickLogo"
        class="bg-primary cursor-pointer"
      >
        <q-img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          alt="logo_app"
        />
      </q-avatar>
      <q-item-label class="text-weight-bolder text-overline q-ml-sm text-white">
        RoomB
      </q-item-label>
    </div>
    <div>
      <div class="flex justify-center items-center q-mt-sm">
        <q-item-label class="text-weight-bold text-body1 text-white">
          {{ t("appDrawer.welcome", { fullName: userStore.user.fullName }) }}
        </q-item-label>
      </div>
    </div>
  </div>
  <q-list class="drawer-list bg-white">
    <q-item
      clickable
      v-for="(item, index) in drawerNavigationList"
      :key="item.title"
      class="justify-center"
      :class="[
        selectedDrawerItemIndex === index ? 'text-primary' : 'text-grey-7',
      ]"
      @click="() => onClickNavItem(item)"
    >
      <q-item-label
        class="text-uppercase text-weight-bold text-overline q-mr-xs"
      >
        {{ t(item.title) }}
      </q-item-label>
    </q-item>
    <q-btn
      v-if="userStore.isUserLogin"
      flat
      color="primary"
      :label="t('appDrawer.btnLogout')"
      icon="logout"
      class="text-weight-bolder flex-center full-width"
      size="md"
      @click="onClickLogout"
    />
  </q-list>
</template>

<style scoped lang="css">
.drawer-list {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex: 1;
}
</style>
