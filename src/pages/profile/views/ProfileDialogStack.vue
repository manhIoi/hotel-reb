<script setup>
import { validators } from "src/utils";
import { useDialog, useToast } from "src/composables";
import server from "src/server";
import { useUserStore } from "stores/user-store";

const userStore = useUserStore();
const promptFullName = defineModel("promptFullName");
const promptPassword = defineModel("promptPassword");
const formData = defineModel("formData");
const { showDialog } = useDialog();
const { showToast } = useToast();

function onSubmitChangeFullName() {
  showDialog("confirm", {
    message: "Are you sure to use this name?",
  }).onOk(async () => {
    const dialogLoading = showDialog("loading");
    try {
      const response = await server.updateProfile({
        fullName: formData.value.fullName,
      });
      if (response?.data) {
        userStore.updateProfile(response?.data);
        dialogLoading.hide().onDismiss(() => {
          showToast("success", "Update full name successfully");
        });
        promptFullName.value = false;
      }
    } catch (e) {
    } finally {
      dialogLoading.hide();
    }
  });
}

function onSubmitChangePassword() {}
</script>

<template>
  <q-dialog v-model="promptFullName">
    <q-card style="min-width: 350px">
      <q-form @submit.prevent="onSubmitChangeFullName">
        <q-card-section>
          <div class="text-h6">Edit your name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            outlined
            dense
            v-model="formData.fullName"
            autofocus
            :rules="[validators.required]"
            hide-bottom-space
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Confirm" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-dialog v-model="promptPassword">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Change your password</div>
      </q-card-section>
      <q-form method="post" @submit.prevent="onSubmitChangePassword">
        <q-card-section class="q-pt-none">
          <q-input
            label="Current password"
            outlined
            dense
            v-model="formData.currentPassword"
            autofocus
            class="q-mb-md"
            type="password"
            :rules="[validators.required, validators.length(6)]"
            hide-bottom-space
          />
          <q-input
            label="New password"
            outlined
            dense
            type="password"
            v-model="formData.newPassword"
            :rules="[validators.required, validators.length(6)]"
            hide-bottom-space
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Confirm" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="css"></style>
