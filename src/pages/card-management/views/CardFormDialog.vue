<script setup>
import { ref, toRefs, watch } from "vue";
import { validators } from "src/utils";
import { useCardPaymentStore } from "stores/card-payment-store";
import server from "src/server";
import { useDialog, useLoading, useToast } from "src/composables";
const dialog = defineModel("dialog");
const form = defineModel("form");

const cardOptions = [
  {
    name: "VISA",
    type: "visa",
  },
];

const cardPaymentStore = useCardPaymentStore();
const { showDialog } = useDialog();
const { showToast } = useToast();

const cardValue = ref(
  cardOptions.find((option) => option?.type === form.value.cardType) || {
    name: "",
    type: "",
  }
);

watch(cardValue, () => {
  form.value.cardType = cardValue.value?.type;
});

watch(
  () => form.value.cardType,
  () => {
    cardValue.value = cardOptions.find(
      (option) => option?.type === form.value.cardType
    ) || {
      name: "",
      type: "",
    };
  }
);

function onSubmit() {
  const newCard = {
    id: form.value.id,
    name: form.value.cardName,
    type: form.value.cardType,
    cardNumber: form.value.cardNumber,
    expire: form.value.cardExpire,
  };
  handleSubmitByType(form.value.actionType, newCard);
}

async function handleSubmitByType(type, data) {
  const dialogLoading = showDialog("loading");
  const response =
    type === "add"
      ? await server.addPaymentCard(data)
      : await server.editPaymentCard(data);
  try {
    if (response.data) {
      console.info("LOG_IT:: response", response);
      if (type === "add") {
        cardPaymentStore.addCard(response.data);
      } else {
        cardPaymentStore.editCard(response.data);
      }
      const toastMessage =
        type === "add" ? "Add successfully" : "Edit successfully";
      showToast("success", toastMessage);
      dialog.value = false;
    }
  } catch (e) {
  } finally {
    dialogLoading.hide();
  }
}
</script>

<template>
  <q-dialog v-model="dialog">
    <q-card style="min-width: 350px">
      <q-form @submit.prevent="onSubmit">
        <q-card-section>
          <div class="text-h6 q-mb-md">Add your payment card</div>
          <q-input
            v-model="form.cardName"
            dense
            outlined
            class="q-mb-md"
            label="Account name"
            :rules="[validators.required]"
            hide-bottom-space
          />
          <q-select
            dense
            v-model="cardValue"
            outlined
            class="q-mb-md"
            label="Account number"
            :options="cardOptions"
            option-value="type"
            option-label="name"
            :rules="[validators.required]"
            hide-bottom-space
          />
          <q-input
            v-model="form.cardNumber"
            dense
            outlined
            class="q-mb-md"
            label="Account number"
            mask="#####-####-####"
            :rules="[validators.required, validators.length(11)]"
            hide-bottom-space
          />
          <q-input
            v-model="form.cardExpire"
            dense
            outlined
            class="q-mb-md"
            mask="##/##"
            label="Expire Date"
            :rules="[validators.required]"
            hide-bottom-space
          />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Confirm" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="css"></style>
