<script>
import MainWrapper from "layouts/MainWrapper.vue";
import MyCards from "pages/card-management/views/MyCards.vue";
import { onMounted, ref, watch } from "vue";
import server from "src/server";

export default {
  components: { MainWrapper, MyCards },
  setup() {
    const dialog = ref(false);

    function onShowDialog(card) {
      console.log("LOG_IT:: card", card);
      dialog.value = true;
    }

    return {
      onShowDialog,
      dialog,
    };
  },
};
</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <my-cards @show-dialog="onShowDialog" />
    </main-wrapper>
    <h1 v-if="dialog">show dialog</h1>
  </q-page>
</template>

<style scoped lang="css"></style>
