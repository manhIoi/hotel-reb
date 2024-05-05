<script setup>
import InputBase from "components/input/InputBase.vue";

const { label } = defineProps({
  label: String
})

</script>

<template>
  <input-base :label="label">
    <q-input outlined mask="date" placeholder="Adults" readonly>
      <template v-slot:append>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>
      </template>
    </q-input>
  </input-base>
</template>

<style scoped lang="css">

</style>
