<script setup>
import InputBase from "components/input/InputBase.vue";
import { InputDatePickerProps } from "components/input/InputProps";

const { label, inputProps, datePickerProps } =
  defineProps(InputDatePickerProps);

const model = defineModel({
  type: true,
  required: true,
});

function clear() {
  model.value = "";
}
</script>

<template>
  <q-input
    placeholder="dd/mm/yyyy"
    outlined
    readonly
    v-model="model"
    mask="date"
    v-bind="inputProps"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="model" v-bind="datePickerProps">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
    <template v-if="model" v-slot:append>
      <q-icon name="close" @click="clear" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<style scoped lang="css"></style>
