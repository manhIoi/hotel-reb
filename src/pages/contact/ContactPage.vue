<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import ContactCard from "pages/contact/views/ContactCard.vue";
import ContactForm from "pages/contact/views/ContactForm.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper class="container">
      <section-title :title="t('contact.title')">
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
      </section-title>
    </main-wrapper>
  </q-page>
</template>

<style lang="css">
.container {
  padding-bottom: 80px;
}
</style>
