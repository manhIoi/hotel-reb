<script setup>
import AuthFormContainer from "pages/auth/components/AuthFormContainer.vue";
import { ref } from "vue";
import { validators } from "src/utils";
import { useUserStore } from "stores/user-store";
import server from "src/server";
import { useToast } from "src/composables";
import { ROUTES_PATH } from "src/router/routes";

const userStore = useUserStore();
const { showToast } = useToast();

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
    <auth-form-container title="Sign Up" btn-title="Sign Up" @submit="onSignUp">
      <template #header>
        <p class="q-mb-md">
          Have an account?
          <RouterLink
            :to="{ path: ROUTES_PATH.signUp }"
            class="text-primary text-weight-bolder"
          >
            Sign In
          </RouterLink>
        </p>
      </template>
      <q-input
        label="Email"
        class="q-mb-sm"
        v-model="formData.email"
        outlined
        :rules="[validators.required, validators.email]"
      />
      <q-input
        label="Full Name"
        class="q-mb-sm"
        v-model="formData.fullName"
        outlined
        :rules="[validators.required]"
      />
      <q-input
        label="Password"
        v-model="formData.password"
        outlined
        type="password"
        :rules="[validators.required, validators.length(6)]"
      >
        <template v-slot:error> Please use maximum 6 characters.</template>
      </q-input>
      <q-input
        label="Confirm password"
        v-model="formData.confirmPassword"
        outlined
        type="password"
        class="q-mb-sm"
        :rules="[validators.matchPassword(formData.password)]"
      />
    </auth-form-container>
  </q-page>
</template>

<style scoped lang="css"></style>
