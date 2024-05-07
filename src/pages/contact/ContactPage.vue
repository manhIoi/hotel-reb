<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import ContactCard from "pages/contact/views/ContactCard.vue";
import ContactForm from "pages/contact/views/ContactForm.vue";
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="bg-white q-pa-md br-md">
        <div class="row q-col-gutter-lg">
          <div class="col-sm-4 col-xs-12">
            <contact-card />
          </div>
          <div class="col-sm-8 col-xs-12">
            <contact-form />
          </div>
        </div>
      </div>
    </main-wrapper>
  </q-page>
</template>

<style lang="css"></style>
