<script setup>
import InputBase from "components/input/InputBase.vue";
import { InputDatePickerProps } from "components/input/InputProps";
import { ref, watch } from "vue";

const { label, inputProps, datePickerProps } =
  defineProps(InputDatePickerProps);

const model = defineModel({
  type: true,
  required: true,
});
const popup = ref(false);

watch(
  () => model.value,
  () => {
    if (model.value) {
      popup.value = false;
    }
  }
);

function clear() {
  model.value = "";
}
</script>

<template>
  <q-input
    hide-bottom-space
    placeholder="dd/mm/yyyy"
    outlined
    readonly
    v-model="model"
    mask="date"
    v-bind="inputProps"
    @click="popup = true"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          v-model="popup"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="model" v-bind="datePickerProps">
            <div class="row items-center justify-end">
              <q-btn
                label="Close"
                color="primary"
                flat
                @click="popup = false"
              />
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
