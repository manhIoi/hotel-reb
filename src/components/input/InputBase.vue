<script setup>
import { InputBaseProps } from "components/input/InputProps";

const { label } = defineProps(InputBaseProps);
</script>

<template>
  <q-item-label v-if="label" class="q-mb-sm text-weight-medium text-body1">
    {{ label }}
  </q-item-label>
  <slot />
</template>

<style scoped lang="css"></style>
