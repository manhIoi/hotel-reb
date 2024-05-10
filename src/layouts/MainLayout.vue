<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";
import LanguageSwitch from "components/LanguageSwitch.vue";
import { useUserStore } from "stores/user-store";
import { storeToRefs } from "pinia";
import { isEmpty } from "lodash";

const navbarList = [
  {
    title: "Branch",
    link: ROUTES_PATH.branch,
    subItems: [
      {
        title: "Branch 1",
      },
      {
        title: "Branch 2",
      },
      {
        title: "Branch 3",
      },
    ],
  },
  {
    link: ROUTES_PATH.search,
    title: "Search",
  },
  {
    title: "Contact",
    link: ROUTES_PATH.contact,
  },
  {
    title: "Profile",
    link: ROUTES_PATH.profile,
  },
];

const router = useRouter();
const route = useRoute();
const selectedNavIndex = ref(-1);
const leftDrawerOpen = ref(false);
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const handleChangeRouteByUserProfile = (userValue) => {
  if (isEmpty(userValue)) {
    router.replace({ path: "/auth" });
  }
};

onMounted(() => {
  handleChangeRouteByUserProfile(user.value);
  userStore.$subscribe((mutation, state) => {
    handleChangeRouteByUserProfile(state.user);
  });
});

watch(route, () => {
  selectedNavIndex.value = navbarList.findIndex((item) => {
    if (route.path === ROUTES_PATH.home && item.link === ROUTES_PATH.home)
      return -1;
    return route.path.includes(item.link);
  });
});

function onClickLogo() {
  router.push(ROUTES_PATH.home);
}

function onClickSearch() {
  router.push(ROUTES_PATH.search);
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function onClickNavItem(item) {
  router.push(item.link);
}

function onClickLogout() {
  userStore.logout().onOk(() => {
    leftDrawerOpen.value = false;
  });
}

function onClickProfile() {
  router.push(ROUTES_PATH.profile);
}
</script>

<template>
  <q-layout>
    <q-header bordered reveal class="text-white bg-white" height-hint="61.59">
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
            v-for="(item, index) in navbarList"
            :key="item.title"
            class="items-center nav-item"
            :class="[
              selectedNavIndex === index ? 'text-primary' : 'text-grey-7',
            ]"
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
              {{ item.title }}
            </p>
          </q-item>
        </q-list>
        <q-btn color="primary" class="q-mx-md" @click="onClickSearch">
          <p class="text-weight-bold">Reservation</p>
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
                clickable
                class="cursor-pointer row items-center text-primary text-weight-medium"
                @click="onClickProfile"
              >
                <q-icon name="person" class="q-mr-xs" />
                <p>Profile</p>
              </q-item>
              <q-separator />
              <q-item
                clickable
                class="row items-center text-primary text-weight-medium"
                @click="onClickLogout"
              >
                <q-icon name="logout" class="q-mr-xs" />
                <p>Logout</p>
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
    </q-header>

    <q-drawer
      v-if="!$q.screen.gt.sm"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="flex column bg-primary"
    >
      <div class="q-pa-lg bg-primary full-width">
        <div class="flex flex-center">
          <q-avatar
            size="32px"
            @click="onClickLogo"
            class="bg-primary cursor-pointer"
          >
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="logo_app"
            />
          </q-avatar>
          <p class="text-weight-bolder text-overline q-ml-sm text-white">
            RoomB
          </p>
        </div>
        <div>
          <div class="flex justify-center items-center q-mt-sm">
            <p class="text-weight-bold text-body1 text-white">
              Welcome, {{ userStore.user.fullName }}
            </p>
          </div>
        </div>
      </div>
      <q-list class="drawer-list bg-white">
        <q-item
          clickable
          v-for="(item, index) in navbarList"
          :key="item.title"
          class="justify-center"
          :class="[selectedNavIndex === index ? 'text-primary' : 'text-grey-7']"
          @click="() => onClickNavItem(item)"
        >
          <p class="text-uppercase text-weight-bold text-overline q-mr-xs">
            {{ item.title }}
          </p>
        </q-item>
        <q-btn
          v-if="userStore.isUserLogin"
          flat
          color="primary"
          label="Logout"
          icon="home"
          class="text-weight-bolder flex-center full-width"
          size="md"
          @click="onClickLogout"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer q-pa-lg">
      <div style="height: 300px"></div>
    </q-footer>
  </q-layout>
</template>

<style lang="css">
.header {
  max-width: var(--container-width);
}

.drawer-list {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex: 1;
}

.nav-item:hover > i,
.nav-item:hover > p {
  color: var(--q-primary) !important;
}

.footer {
  background-color: var(--footer-color);
}
</style>
