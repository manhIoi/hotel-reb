<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import { useUserStore } from "stores/user-store";
import { ref } from "vue";
import ProfileInformation from "pages/profile/views/ProfileInformation.vue";
import ProfileDialogStack from "pages/profile/views/ProfileDialogStack.vue";
const userStore = useUserStore();

const formData = ref({
  fullName: userStore.user.fullName,
  currentPassword: "",
  newPassword: "",
});
const promptFullName = ref(false);
const promptPassword = ref(false);
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <profile-information
        @update:fullName="promptFullName = true"
        @change:password="promptPassword = true"
      />
    </main-wrapper>
    <profile-dialog-stack
      v-model:form-data="formData"
      v-model:prompt-password="promptPassword"
      v-model:prompt-full-name="promptFullName"
    />
  </q-page>
</template>

<style scoped lang="css"></style>
