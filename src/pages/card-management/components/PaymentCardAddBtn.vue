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
  <q-card class="fit add-card-btn bg-grey-3" flat bordered>
    <q-card-section horizontal class="fit">
      <q-card-section class="flex column justify-center col">
        <q-item-label class="text-weight-bold text-h6">
          {{ t("cardManagement.myCards.addBtnTitle") }}
        </q-item-label>
        <q-item-label class="text-grey-8">
          {{ t("cardManagement.myCards.addBtnDescription") }}
        </q-item-label>
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          :label="t('cardManagement.myCards.addBtn')"
          @click="$emit('clickAddBtn')"
          padding="8px 20px"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css">
.add-card-btn {
  border: 1px dashed var(--primary-color);
}
</style>
