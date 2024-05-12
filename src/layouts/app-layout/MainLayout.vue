<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "stores/user-store";
import { storeToRefs } from "pinia";
import { isEmpty } from "lodash";
import AppHeader from "layouts/app-layout/views/AppHeader.vue";
import AppDrawer from "layouts/app-layout/views/AppDrawer.vue";

const router = useRouter();
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
</script>

<template>
  <q-layout>
    <q-header bordered reveal class="text-white bg-white" height-hint="61.59">
      <app-header v-model:left-drawer-open="leftDrawerOpen" />
    </q-header>

    <q-drawer
      v-if="!$q.screen.gt.sm"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="flex column bg-primary"
    >
      <app-drawer />
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
.footer {
  background-color: var(--footer-color);
}
</style>
