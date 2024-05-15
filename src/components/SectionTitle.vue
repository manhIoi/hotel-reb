<script setup>
const { title, backgroundColor, centerTitle } = defineProps({
  title: String,
  backgroundColor: {
    type: String,
    default: "bg-transparent",
  },
  centerTitle: {
    type: Boolean,
    default: false,
  },
});
const _title = title.toUpperCase();
</script>

<template>
  <div class="container">
    <div
      class="row items-center title-container"
      :class="[
        backgroundColor,
        centerTitle ? 'justify-center' : 'justify-between',
      ]"
    >
      <p class="text-h4 text-weight-bold text-grey-9 title">
        {{ _title }}
      </p>
      <slot name="right-title" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="css">
.container {
  padding: 44px 0 60px 0;
}
.title-container {
  padding-bottom: 60px;
}
</style>
