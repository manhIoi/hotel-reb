<script setup>
import { ref } from "vue";
import { validators } from "src/utils";
import { useDialog } from "src/composables";
import { useToast } from "src/composables/useToast";
import { useI18n } from "vue-i18n";

const formData = ref({
  email: "",
  firstName: "",
  lasName: "",
  phoneNumber: "",
  message: "",
});

const { showDialog } = useDialog();
const { showToast } = useToast();
const { t } = useI18n();

function onSubmit() {
  showDialog("confirm", {
    message: t("contact.messageDialog"),
  }).onOk(() => showToast("success", t("contact.toastSuccess")));
}
</script>

<template>
  <q-form method="post" @submit.prevent="onSubmit">
    <div class="q-mt-md">
      <p class="text-weight-bold text-h5 text-grey-10">
        {{ t("contact.leaveYourMessage") }}
      </p>
      <p class="text-weight-regular text-subtitle1 text-grey-8 q-my-md">
        {{ t("contact.descMessage") }}
      </p>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.email"
          outlined
          type="email"
          :label="t('contact.formLabel.email')"
          :rules="[validators.required, validators.email]"
        />
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.firstName"
          outlined
          type="text"
          :label="t('contact.formLabel.fistName')"
          :rules="[validators.required]"
        />
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.lasName"
          outlined
          type="text"
          :label="t('contact.formLabel.lastName')"
          :rules="[validators.required]"
        />
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.phoneNumber"
          outlined
          type="text"
          :label="t('contact.formLabel.phoneNumber')"
          :rules="[validators.required]"
        />
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.message"
          outlined
          type="textarea"
          :label="t('contact.formLabel.message')"
          :rules="[validators.required]"
        />
      </div>
    </div>
    <q-btn
      type="submit"
      :label="t('contact.btnConfirm')"
      color="primary"
      size="lg"
      class="full-width q-mt-md"
    />
  </q-form>
</template>

<style scoped lang="css"></style>
