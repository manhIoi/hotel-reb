<script>
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";
import { reactive, ref, toRefs, watch } from "vue";
import PaymentCardItem from "pages/card-management/components/PaymentCardItem.vue";
import PaymentCardAddBtn from "pages/card-management/components/PaymentCardAddBtn.vue";
import { useCardPaymentStore } from "stores/card-payment-store";

export default {
  components: { PaymentCardAddBtn, PaymentCardItem, SectionTitle },
  emits: ["showDialog"],
  setup(props, ctx) {
    const cardStore = useCardPaymentStore();
    const { cardList } = toRefs(cardStore);
    const { t } = useI18n();

    function onClickAddCard() {
      ctx.emit("showDialog");
    }

    function onClickEditCard(card) {
      ctx.emit("showDialog", card);
    }

    return {
      t,
      cardList,
      onClickEditCard,
      onClickAddCard,
    };
  },
};
</script>

<template>
  <section-title :title="t('cardManagement.myCards')">
    <div class="row q-col-gutter-md">
      <div
        class="col-md-6 col-xs-12"
        v-for="item in cardList"
        :key="item.cardNumber"
      >
        <payment-card-item
          :payment-card="item"
          @click-edit-card="onClickEditCard"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <payment-card-add-btn @click-add-btn="onClickAddCard" />
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
