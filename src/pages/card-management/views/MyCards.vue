<script>
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import PaymentCardItem from "pages/card-management/components/PaymentCardItem.vue";
import PaymentCardAddBtn from "pages/card-management/components/PaymentCardAddBtn.vue";
import { useCardPaymentStore } from "stores/card-payment-store";
import { useDialog, useToast } from "src/composables";
import server from "src/server";

export default {
  components: { PaymentCardAddBtn, PaymentCardItem, SectionTitle },
  emits: ["showDialog"],
  setup(props, ctx) {
    const cardStore = useCardPaymentStore();
    const { cardList } = toRefs(cardStore);
    const { t } = useI18n();
    const { showDialog } = useDialog();
    const { showToast } = useToast();

    onMounted(() => {
      console.info("LOG_IT:: cardList", cardList.value);
    });

    function onClickAddCard() {
      ctx.emit("showDialog");
    }

    function onClickEditCard(card) {
      ctx.emit("showDialog", card);
    }

    function onClickDeleteCard(card) {
      showDialog("confirm", { message: "Are you sure delete this card" }).onOk(
        () => handleDeleteCard(card)
      );
    }

    async function handleDeleteCard(card) {
      const dialog = showDialog("loading");
      try {
        const response = await server.removePaymentCard(card);
        console.info("LOG_IT:: response", response);
        if (response.statusCode === 200) {
          cardStore.removeCard(card);
          showToast("success", "Remove card successfully");
        }
      } catch (e) {
      } finally {
        dialog.hide();
      }
    }

    return {
      t,
      cardList,
      onClickEditCard,
      onClickAddCard,
      onClickDeleteCard,
    };
  },
};
</script>

<template>
  <section-title :title="t('cardManagement.myCards.title')">
    <div class="row q-col-gutter-md">
      <div
        class="col-md-6 col-xs-12"
        v-for="item in cardList"
        :key="item.cardNumber"
      >
        <payment-card-item
          :payment-card="item"
          @click-edit-card="onClickEditCard"
          @click-delete-card="onClickDeleteCard"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <payment-card-add-btn @click-add-btn="onClickAddCard" />
      </div>
    </div>
  </section-title>
</template>

<style scoped lang="css"></style>
