<script setup>
import AuthFormContainer from "pages/auth/components/AuthFormContainer.vue";
import { ref } from "vue";
import { validators } from "src/utils";
import { ROUTES_PATH } from "src/router/routes";
import { useUserStore } from "stores/user-store";
import server from "src/server";
import { useToast } from "src/composables";

const userStore = useUserStore();
const { showToast } = useToast();

const formData = ref({
  email: "",
  password: "",
});

async function onSignIn() {
  try {
    const response = await server.signIn(
      formData.value.email,
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
    <auth-form-container title="Sign In" btn-title="Sign Up" @submit="onSignIn">
      <template #header>
        <p class="q-mb-md">
          New to RoomB?
          <RouterLink
            :to="{ path: ROUTES_PATH.signUp }"
            class="text-primary text-weight-bolder"
          >
            Sign Up
          </RouterLink>
        </p>
      </template>
      <q-input
        label="Email"
        class="q-mb-md"
        v-model="formData.email"
        outlined
        :rules="[validators.email, validators.required]"
        hide-bottom-space
      />
      <q-input
        label="Password"
        v-model="formData.password"
        outlined
        type="password"
        class="q-mb-md"
        :rules="[validators.required]"
        hide-bottom-space
      />
    </auth-form-container>
  </q-page>
</template>

<style scoped lang="css"></style>
