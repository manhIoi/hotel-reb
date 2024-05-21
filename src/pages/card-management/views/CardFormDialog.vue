<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    dialog: Boolean,-->
<!--  },-->
<!--  emits: ["update:dialog"],-->
<!--  setup(props) {-->
<!--    function onSubmit() {}-->

<!--    return {-->
<!--      onSubmit,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<script setup>
import { computed, ref, toRefs } from "vue";
import { isEmpty } from "lodash";

const props = defineProps({
  defaultCard: {
    type: Object,
  },
});
const { defaultCard } = toRefs(props);
const dialog = defineModel("dialog");
const cardOptions = [
  {
    name: "VISA",
    type: "visa",
  },
  {
    name: "Master Card",
    type: "mastercard",
  },
];
const form = computed(() => {
  return {
    cardName: defaultCard.value?.name || "",
    cardType: cardOptions.find(
      (card) => defaultCard.value?.type === card.type
    ) || {
      name: "",
      type: "",
    },
    cardNumber: defaultCard.value?.cardNumber || "",
    cardExpire: defaultCard.value?.expire || "",
  };
});

function onSubmit() {
  if (isEmpty(defaultCard.value)) {
    alert("add card");
  } else {
    alert("edit card");
  }
  console.log("LOG_IT:: form.value", form.value);
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
          />
          <q-select
            v-model="form.cardType"
            dense
            outlined
            class="q-mb-md"
            label="Account number"
            :options="cardOptions"
            option-value="type"
            option-label="name"
          />
          <q-input
            v-model="form.cardNumber"
            dense
            outlined
            class="q-mb-md"
            label="Account number"
          />
          <q-input
            v-model="form.cardExpire"
            dense
            outlined
            class="q-mb-md"
            label="Expire Date"
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
