<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <q-card flat class="column br-sm bg-primary text-white full-height">
    <q-card-section>
      <q-item-label class="text-h4 text-weight-medium">ROOMB</q-item-label>
      <q-item-label class="text-subtitle2 text-weight-regular">
        {{ t("contact.contactInformation") }}
      </q-item-label>
      <div class="q-py-lg q-my-lg">
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-envelope" size="24px" />
          <q-item-label
            class="text-subtitle1 text-white q-ml-sm text-weight-regular"
          >
            roomb@gmail.com
          </q-item-label>
        </div>
        <div class="row items-center q-mb-md">
          <q-icon name="fa-solid fa-phone" size="24px" />
          <q-item-label
            class="text-subtitle1 text-white q-ml-sm text-weight-regular"
          >
            +8412345677
          </q-item-label>
        </div>
        <div class="row items-center">
          <q-icon name="fa-solid fa-location-dot" size="24px" />
          <q-item-label
            class="text-subtitle1 text-white q-ml-sm text-weight-regular"
          >
            189 Thai Phien Street, Ho Chi Minh City
          </q-item-label>
        </div>
      </div>
    </q-card-section>
    <q-space />
    <q-card-actions>
      <q-btn flat icon="fa-brands fa-facebook" />
      <q-btn flat icon="fa-brands fa-instagram" />
      <q-btn flat icon="fa-brands fa-twitch" />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="css"></style>
