<script setup>
import InputBase from "components/input/InputBase.vue";
import {InputBaseProps} from "components/input/InputProps";

const {label, inputProps} = defineProps(InputBaseProps)

const model = defineModel({
  type: true,
  required: true
})

</script>

<template>
  <input-base :label="label">
    <q-input placeholder="dd/mm/yyyy" outlined v-model="model" mask="date" readonly v-bind="inputProps">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="model">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat/>
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </input-base>

</template>

<style scoped lang="css">

</style>
