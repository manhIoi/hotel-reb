<script>
import MainWrapper from "layouts/MainWrapper.vue";
import MyCards from "pages/card-management/views/MyCards.vue";
import { onMounted, ref, watch } from "vue";
import server from "src/server";
import CardFormDialog from "pages/card-management/views/CardFormDialog.vue";
import { isEmpty } from "lodash";

export default {
  components: { CardFormDialog, MainWrapper, MyCards },
  setup() {
    const dialog = ref(false);
    const form = ref({
      id: "",
      cardName: "",
      cardType: "",
      cardNumber: "",
      cardExpire: "",
      actionType: "add",
    });

    function onShowDialog(card) {
      const action = isEmpty(card) ? "add" : "edit";
      form.value.id = card?.id || "";
      form.value.cardName = card?.name || "";
      form.value.cardNumber = card?.cardNumber || "";
      form.value.cardExpire = card?.expire || "";
      form.value.cardType = card?.type || "";
      dialog.value = true;
      form.value.actionType = action;
    }

    return {
      dialog,
      form,
      onShowDialog,
    };
  },
};
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <my-cards @show-dialog="onShowDialog" />
    </main-wrapper>
    <card-form-dialog v-model:dialog="dialog" v-model:form="form" />
  </q-page>
</template>

<style scoped lang="css"></style>
