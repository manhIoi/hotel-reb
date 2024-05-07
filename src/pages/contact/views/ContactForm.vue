<script setup>

import {ref} from "vue";
import {validators} from "src/utils";
import {useDialog} from "src/composables";
import {useToast} from "src/composables/useToast";

const formData = ref({
  email: '',
  firstName: '',
  lasName: '',
  phoneNumber: '',
  message: '',
})

const {showDialog} = useDialog()
const {showToast} = useToast()

function onSubmit() {
  showDialog('confirm', {
    message: "Are you sure send this message ?"
  }).onOk(() => showToast('success', 'Thanks you for your message'))
}

</script>

<template>
  <q-form method="post" @submit.prevent="onSubmit">
    <div class="q-mt-md">
      <p class="text-weight-bold text-h5 text-grey-10">Leave your Message</p>
      <p class="text-weight-regular text-subtitle1 text-grey-8 q-my-md">Contac us today using this form and we
        will reach you asap</p>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.email"
          outlined
          type="email"
          placeholder="Email"
          :rules="[validators.required, validators.email]"/>
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.firstName"
          outlined type="text"
          placeholder="First name"
          :rules="[validators.required]"/>
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.lasName"
          outlined type="text"
          placeholder="Last name"
          :rules="[validators.required]"/>
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.phoneNumber"
          outlined
          type="text"
          placeholder="Phone number"
          :rules="[validators.required]"/>
      </div>
      <div class="col-sm-6 col-xs-12">
        <q-input
          v-model="formData.message"
          outlined
          type="textarea"
          placeholder="Message"
          :rules="[validators.required]"/>
      </div>
    </div>
    <q-btn type="submit" label="Submit" color="primary" size="lg" class="full-width q-mt-md"/>
  </q-form>
</template>

<style scoped lang="css">

</style>
