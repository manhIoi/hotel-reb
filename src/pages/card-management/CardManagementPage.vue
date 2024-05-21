<script>
import MainWrapper from "layouts/MainWrapper.vue";
import MyCards from "pages/card-management/views/MyCards.vue";
import { onMounted, ref, watch } from "vue";
import server from "src/server";
import CardFormDialog from "pages/card-management/views/CardFormDialog.vue";

export default {
  components: { CardFormDialog, MainWrapper, MyCards },
  setup() {
    const dialog = ref(false);
    const selectedCard = ref(null);

    function onShowDialog(card) {
      console.log("LOG_IT:: card", card);
      selectedCard.value = card;
      dialog.value = true;
    }

    return {
      onShowDialog,
      dialog,
      selectedCard,
    };
  },
};
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <my-cards @show-dialog="onShowDialog" />
    </main-wrapper>
    <card-form-dialog v-model:dialog="dialog" :default-card="selectedCard" />
  </q-page>
</template>

<style scoped lang="css"></style>
