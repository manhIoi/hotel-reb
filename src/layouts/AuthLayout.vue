<script setup>
import { useUserStore } from "stores/user-store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { isEmpty } from "lodash";
import { useRouter } from "vue-router";

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
            <q-img
              width="100px"
              height="100px"
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            />
            <h2 class="text-weight-bolder q-mb-md">RoomB</h2>
            <p class="text-body1 text-weight-medium">
              Booking your room becomes easy
            </p>
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
