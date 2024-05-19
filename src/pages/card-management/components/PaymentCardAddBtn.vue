<script>
import { useI18n } from "vue-i18n";

export default {
  emits: ["clickAddBtn"],
  setup(props) {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>
<template>
  <q-card class="fit" flat bordered>
    <q-card-section horizontal class="fit">
      <q-card-section class="flex column justify-center col">
        <q-item-label>
          {{ t("cardManagement.myCards.addBtnTitle") }}
        </q-item-label>
        <q-item-label>
          {{ t("cardManagement.myCards.addBtnDescription") }}
        </q-item-label>
      </q-card-section>
      <q-card-actions>
        <q-btn label="Add Card" @click="$emit('clickAddBtn')" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css"></style>
