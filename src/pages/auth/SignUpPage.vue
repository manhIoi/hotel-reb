<script setup>
import AuthFormContainer from "pages/auth/components/AuthFormContainer.vue";
import { ref } from "vue";
import { validators } from "src/utils";
import { useUserStore } from "stores/user-store";
import server from "src/server";
import { useToast } from "src/composables";
import { ROUTES_PATH } from "src/router/routes";
import { useI18n } from "vue-i18n";

const userStore = useUserStore();
const { showToast } = useToast();
const { t } = useI18n();

const formData = ref({
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
});

async function onSignUp() {
  try {
    const response = await server.signUp(
      formData.value.email,
      formData.value.fullName,
      formData.value.password
    );
    if (response.data?.token) {
      userStore.updateProfile(response.data);
      showToast("success", "Welcome to RoomB");
    } else {
      showToast("error", response.message);
    }
  } catch (e) {}
}
</script>

<template>
  <q-page class="flex flex-center">
    <auth-form-container
      :title="t('auth.signUp')"
      :btn-title="t('auth.formBtn.signUp')"
      @submit="onSignUp"
    >
      <template #header>
        <p class="q-mb-md">
          {{ t("auth.labelSignUp") }}
          <RouterLink
            :to="{ path: ROUTES_PATH.signIn }"
            class="text-primary text-weight-bolder"
          >
            {{ t("auth.labelLinkSignIn") }}
          </RouterLink>
        </p>
      </template>
      <q-input
        :label="t('auth.formLabel.email')"
        class="q-mb-md"
        v-model="formData.email"
        outlined
        :rules="[validators.required, validators.email]"
        hide-bottom-space
      />
      <q-input
        :label="t('auth.formLabel.fullName')"
        class="q-mb-md"
        v-model="formData.fullName"
        outlined
        :rules="[validators.required]"
        hide-bottom-space
      />
      <q-input
        :label="t('auth.formLabel.password')"
        class="q-mb-md"
        v-model="formData.password"
        outlined
        type="password"
        :rules="[validators.required, validators.length(6)]"
        hide-bottom-space
      >
        <template v-slot:error> Please use maximum 6 characters.</template>
      </q-input>
      <q-input
        :label="t('auth.formLabel.confirmPassword')"
        v-model="formData.confirmPassword"
        outlined
        type="password"
        class="q-mb-md"
        :rules="[validators.matchPassword(formData.password)]"
        hide-bottom-space
      />
    </auth-form-container>
  </q-page>
</template>

<style scoped lang="css"></style>
