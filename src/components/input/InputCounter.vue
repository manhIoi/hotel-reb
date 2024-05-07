<script setup>
import InputBase from "components/input/InputBase.vue";
import {QInput} from "quasar";
import {InputBaseProps} from "components/input/InputProps";

const {label, inputProps} = defineProps(InputBaseProps);
const model = defineModel({
  required: true,
  type: Number,
  default: 0
})

function increase() {
  model.value++;
}

function decrease() {
  if (model.value > 0) {
    model.value--;
  }
}

</script>

<template>
  <input-base :label="label">
    <q-input outlined mask="date" readonly v-bind="inputProps" v-model="model">
      <template v-slot:append>
        <q-btn round color="primary" glossy icon="remove" size="xs" @click="decrease" />
        <q-btn round color="primary" glossy icon="add" size="xs" @click="increase" class="q-ml-xs" />
      </template>
    </q-input>
  </input-base>
</template>

<style scoped lang="css">

</style>
