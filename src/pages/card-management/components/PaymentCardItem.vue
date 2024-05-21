<script>
import { onMounted, toRefs } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "PaymentCardItem",
  emits: ["clickEditCard", "clickDeleteCard"],
  props: {
    paymentCard: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { paymentCard } = toRefs(props);
    const { t } = useI18n();

    onMounted(() => {
      console.info("LOG_IT:: paymentCard", paymentCard.value.expire);
    });

    return {
      t,
    };
  },
};
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col">
        <q-item-label class="text-overline text-orange-9">
          {{ paymentCard.name }}
        </q-item-label>
        <div class="row items-center">
          <q-avatar size="40px" class="q-mr-md">
            <q-img src="../../../assets/visa.png" />
          </q-avatar>
          <div class="col">
            <div class="row">
              <q-item-label class="text-h5 q-mt-sm q-mb-xs q-mr-md">
                {{ paymentCard.cardNumber }}
              </q-item-label>
              <q-btn color="grey" round flat dense icon="content_copy" />
            </div>

            <div class="text-caption text-grey">
              {{
                t("cardManagement.cardItem.expireDate", {
                  value: paymentCard.expire,
                })
              }}
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          outline
          flat
          color="primary"
          :label="t('cardManagement.myCards.editBtn')"
          padding="6px 18px"
          @click="$emit('clickEditCard', paymentCard)"
        />
        <q-btn
          outline
          flat
          color="red-6"
          icon="delete"
          @click="$emit('clickDeleteCard', paymentCard)"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css"></style>
