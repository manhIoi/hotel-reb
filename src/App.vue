<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "stores/user-store";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { isEmpty } from "lodash";
const userStore = useUserStore();
const $q = useQuasar();

onMounted(() => {
  if (isEmpty(userStore.user)) {
    $q.dialog({
      title: "Tell web who you are",
      message: "What is your name?",
      prompt: {
        model: "",
        isValid: (val) => val.length > 0,
        type: "text",
      },
      ok: {
        label: "Ok",
        color: "primary",
      },
      persistent: true,
    }).onOk((data) => {
      userStore.updateProfile({
        name: data,
      });
    });
  }
});

defineOptions({
  name: "App",
});
</script>
