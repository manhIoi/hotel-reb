<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { useUserStore } from "stores/user-store";
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const userStore = useUserStore();
const emits = defineEmits(["update:fullName", "change:password"]);
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
  <section-title title="Profile">
    <div class="br-sm q-pa-md bg-white">
      <div class="row items-center">
        <q-avatar size="80px" color="primary" text-color="white">
          <q-img v-if="userStore.user.avatar" :src="userStore.user.avatar" />
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
        <p style="flex: 1" class="q-my-md text-grey-8">
          {{ userStore.user.fullName }}
        </p>
        <q-btn
          color="primary"
          class="self-start"
          label="Edit"
          @click="emits('update:fullName')"
        />
      </div>
      <q-separator class="q-my-lg" />
      <div :style="styles.containerField" class="q-mb-lg">
        <p class="text-weight-bolder q-my-md" style="min-width: 200px">Email</p>
        <p style="flex: 1" class="text-grey-8">{{ userStore.user.username }}</p>
      </div>
      <div :style="styles.containerField">
        <p class="text-weight-bolder" style="min-width: 200px">Password</p>
        <p class="q-my-md text-grey-8" style="flex: 1">
          {{ userStore.user.fullName }}
        </p>
        <q-btn
          color="primary"
          class="self-start"
          label="Change password"
          @click="emits('change:password')"
        />
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
