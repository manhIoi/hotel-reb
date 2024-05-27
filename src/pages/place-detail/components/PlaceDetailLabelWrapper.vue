<script>
export default {
  name: "PlaceDetailLabelWrapper",
  props: {
    label: String,
  },
};
</script>

<template>
  <q-item-label class="q-mb-md text-weight-bold text-grey-9">
    {{ label }}
  </q-item-label>
  <slot />
</template>

<style scoped lang="css"></style>
