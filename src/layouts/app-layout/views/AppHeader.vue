<script setup>
import {
  navbarNavigationList,
  profileNavigationList,
} from "layouts/NavigationRoutes";
import LanguageSwitch from "components/LanguageSwitch.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { useUserStore } from "stores/user-store";
import { ROUTES_PATH } from "src/router/routes";
import { useI18n } from "vue-i18n";

const leftDrawerOpen = defineModel("leftDrawerOpen");
const router = useRouter();
const route = useRoute();
const selectedNavIndex = ref(-1);
const userStore = useUserStore();
const { t } = useI18n();

watchEffect(() => {
  selectedNavIndex.value = navbarNavigationList.findIndex((item) => {
    if (route.path === ROUTES_PATH.home && item.link === ROUTES_PATH.home)
      return -1;
    return route.path.includes(item.link);
  });
});

function onClickLogo() {
  router.replace({ name: ROUTES_PATH.home });
}

function onClickSearch() {
  router.push({ name: ROUTES_PATH.search });
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function onClickNavItem(item) {
  router.push({ name: item.link });
}

function onClickLogout() {
  userStore.logout().onOk(() => {
    leftDrawerOpen.value = false;
  });
}

function onClickProfileItem(item) {
  router.push({ name: item.link });
}
</script>

<template>
  <q-toolbar class="header q-mx-auto q-py-sm q-px-md justify-between">
    <q-avatar
      size="32px"
      @click="onClickLogo"
      class="bg-primary q-mx-md cursor-pointer"
    >
      <img
        src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
        alt="logo_app"
      />
    </q-avatar>
    <q-separator color="grey-3" inset vertical />
    <div class="q-mx-md">
      <language-switch />
    </div>
    <q-space />
    <q-list v-if="$q.screen.gt.sm" class="row items-center no-wrap">
      <q-item
        clickable
        v-for="(item, index) in navbarNavigationList"
        :key="item.title"
        class="items-center nav-item"
        :class="[selectedNavIndex === index ? 'text-primary' : 'text-grey-7']"
        @click="() => onClickNavItem(item)"
      >
        <p
          class="text-uppercase text-weight-bold text-overline q-mr-xs"
          :class="[
            selectedNavIndex === index
              ? 'text-weight-bolder'
              : 'text-weight-medium',
          ]"
        >
          {{ t(item.title) }}
        </p>
      </q-item>
    </q-list>
    <q-btn color="primary" class="q-mx-md" @click="onClickSearch">
      <p class="text-weight-bold">{{ t("appHeader.btnReservation") }}</p>
    </q-btn>
    <q-avatar
      v-if="$q.screen.gt.sm"
      color="primary"
      text-color="white"
      class="cursor-pointer"
    >
      <q-img
        v-if="userStore.user?.avatar"
        src="https://cdn.quasar.dev/img/avatar.png"
      />
      <p v-else>{{ userStore.user?.fullName?.[0] }}</p>
      <q-menu>
        <q-list style="min-width: 200px">
          <q-item
            v-for="item in profileNavigationList"
            :key="item.link"
            clickable
            class="cursor-pointer row items-center text-primary text-weight-medium"
            @click="() => onClickProfileItem(item)"
          >
            <q-icon :name="item.icon" class="q-mr-xs" />
            <p>{{ t(item.title) }}</p>
          </q-item>
          <q-separator />
          <q-item
            clickable
            class="row items-center text-primary text-weight-medium"
            @click="onClickLogout"
          >
            <q-icon name="logout" class="q-mr-xs" />
            <p>{{ t("appHeader.btnLogout") }}</p>
          </q-item>
        </q-list>
      </q-menu>
    </q-avatar>

    <transition transition-show="jump-down">
      <q-btn
        v-if="!$q.screen.gt.sm"
        dense
        flat
        round
        @click="toggleLeftDrawer"
        color="primary"
      >
        <q-icon v-if="leftDrawerOpen" name="close" />
        <q-icon v-else name="menu" />
      </q-btn>
    </transition>
  </q-toolbar>
</template>

<style scoped lang="css">
.header {
  max-width: var(--container-width);
}

.nav-item:hover > i,
.nav-item:hover > p {
  color: var(--q-primary) !important;
}
</style>
