<script setup>
import { useUserStore } from "stores/user-store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { isEmpty } from "lodash";
import { useRouter } from "vue-router";
import Logo from "../assets/logo-white.svg";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const router = useRouter();

const handleChangeRouteByUserProfile = (userValue) => {
  if (!isEmpty(userValue)) {
    router.replace({ path: "/home" });
  }
};

onMounted(() => {
  handleChangeRouteByUserProfile(user.value);
  userStore.$subscribe((mutation, state) => {
    handleChangeRouteByUserProfile(state);
  });
});
</script>

<template>
  <q-layout>
    <div class="container">
      <div class="row fit">
        <div class="col-md-4 col-xs-0">
          <div class="fit bg-primary flex-center flex text-white column">
            <q-img width="120px" height="120px" :src="Logo" />
            <q-item-label class="text-subtitle1 text-weight-medium">
              Booking your room becomes easy
            </q-item-label>
          </div>
        </div>
        <div class="col-md-8 col-xs-12 bg-white">
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style scoped lang="css">
.container {
  height: 100vh;
}
</style>
