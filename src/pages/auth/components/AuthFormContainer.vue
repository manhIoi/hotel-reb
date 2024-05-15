<script setup>
const { title, btnTitle } = defineProps({
  title: String,
  btnTitle: String,
});
const emit = defineEmits(["submit"]);
</script>

<template>
  <div class="container">
    <p class="text-weight-bolder text-h4 q-mb-md">{{ title }}</p>
    <slot name="header" />
    <q-form method="post" @submit.prevent="emit('submit')">
      <slot />
      <q-btn
        type="submit"
        :label="btnTitle"
        color="primary"
        class="full-width"
      />
    </q-form>
  </div>
</template>

<style scoped lang="css">
.container {
  min-width: 400px;
}
</style>
