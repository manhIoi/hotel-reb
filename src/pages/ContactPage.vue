<script setup>

import MainWrapper from "layouts/MainWrapper.vue";
import {ref} from "vue";

const email = ref('');
const firstName = ref('');
const lasName = ref('');
const phoneNumber = ref('');
const message = ref('');

function onSubmit() {
}

</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="bg-white q-pa-md form-container">
        <div class="row q-col-gutter-lg">
          <div class="col-sm-4 col-xs-12">
            <q-card class="column my-card bg-primary text-white full-height">
              <q-card-section>
                <div class="text-h4 text-weight-medium">FT. HOTEL</div>
                <div class="text-subtitle2 text-weight-regular">Contact information</div>
                <div class="q-py-lg q-my-lg">
                  <div class="row items-center q-mb-md">
                    <q-icon name="home" size="32px"/>
                    <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">Hotel.np002@gmai.com</p>
                  </div>
                  <div class="row items-center q-mb-md">
                    <q-icon name="home" size="32px"/>
                    <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">Hotel.np002@gmai.com</p>
                  </div>
                  <div class="row items-center">
                    <q-icon name="home" size="32px"/>
                    <p class="text-subtitle1 text-white q-ml-sm text-weight-regular">Hotel.np002@gmai.com</p>
                  </div>
                </div>
              </q-card-section>
              <q-space  />
              <q-card-actions>
                <q-btn flat icon="email"/>
                <q-btn flat icon="email"/>
                <q-btn flat icon="email"/>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-8 col-xs-12">
            <q-form method="post" @submit.prevent="onSubmit">
              <div class="form-header q-mt-md">
                <p class="text-weight-bold text-h5 text-grey-10">Leave your Message</p>
                <p class="text-weight-regular text-subtitle1 text-grey-8 q-my-md">Contac us today using this form and we
                  will reach you asap</p>
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-sm-6 col-xs-12">
                  <q-input
                    v-model="email"
                    outlined
                    type="email"
                    placeholder="Email"
                    :rules="[
                    val => !!val || 'field required'
                  ]"/>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <q-input v-model="firstName" outlined type="text" placeholder="First name"/>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <q-input v-model="lasName" outlined type="text" placeholder="Last name"/>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <q-input v-model="phoneNumber" outlined type="number" placeholder="Phone number"/>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <q-input v-model="message" outlined type="textarea" placeholder="Message"/>
                </div>
              </div>
              <q-btn type="submit" label="Submit" color="primary" size="lg" class="btn-submit q-mt-md"/>
            </q-form>
          </div>
        </div>
      </div>
    </main-wrapper>
  </q-page>
</template>

<style lang="css">
.form-header {
}

.form-container {
  border-radius: 12px;
}

.my-card {
  border-radius: 12px;
}

.contact-input {
  height: 130px;
  background-color: red;
}

.btn-submit {
  width: 100%;
}
</style>
