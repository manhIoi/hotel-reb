<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useQuasar } from "quasar";
import { useUserStore } from "stores/user-store";
import { computed, onMounted, ref } from "vue";

const $q = useQuasar();
const userStore = useUserStore();

const username = ref(userStore.user.username);
const prompt = ref(false);

const styles = computed(() => {
  return {
    containerField: {
      display: "flex",
      flexDirection: $q.screen.gt.sm ? "row" : "column",
      justifyContent: "flex-start",
      alignItems: $q.screen.gt.sm ? "center" : "flex-start",
    },
  };
});
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <section-title title="Profile">
        <div class="br-sm q-pa-md bg-white">
          <div class="row items-center">
            <q-avatar size="80px" color="primary" text-color="white">
              <q-img
                v-if="userStore.user.avatar"
                :src="userStore.user.avatar"
              />
              <p v-else>{{ userStore.user.fullName[0] }}</p>
            </q-avatar>
            <div class="column q-ml-md">
              <p class="text-weight-bolder text-h6">
                {{ userStore.user.fullName }}
              </p>
              <p class="text-grey-8">Member since 1/5/2024</p>
            </div>
          </div>
          <q-separator class="q-my-lg" />
          <div :style="styles.containerField">
            <p class="text-weight-bolder" style="min-width: 200px">Name</p>
            <p style="flex: 1">{{ userStore.user.fullName }}</p>
            <q-btn
              color="primary"
              class="self-start"
              label="Edit"
              @click="prompt = true"
            />
          </div>
          <q-separator class="q-my-lg" />
          <div :style="styles.containerField" class="q-mb-lg">
            <p class="text-weight-bolder" style="min-width: 200px">Email</p>
            <p style="flex: 1">{{ userStore.user.username }}</p>
          </div>
          <div :style="styles.containerField">
            <p class="text-weight-bolder" style="min-width: 200px">Password</p>
            <p style="flex: 1">{{ userStore.user.fullName }}</p>
            <q-btn color="primary" class="self-start" label="Change password" />
          </div>
        </div>
      </section-title>
    </main-wrapper>
    <q-dialog v-model="prompt">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Edit your name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined dense v-model="username" autofocus />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Confirm" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped lang="css"></style>
