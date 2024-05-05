<script setup>
import {ref} from "vue";
import InputBase from "components/input/InputBase.vue";
const { label } = defineProps({
  label: String,
})

const dateSelected = ref();
</script>

<template>
  <input-base :label="label" >
    <q-input outlined v-model="dateSelected" mask="date" placeholder="Check in" readonly>
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="dateSelected">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
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
