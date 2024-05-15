<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  value: Number,
  title: String,
});
const _title = props.title.toUpperCase();
const counterValue = ref(0);

const increaseCounter = () => {
  const intervalId = setInterval(() => {
    counterValue.value++;
    if (counterValue.value >= props.value) {
      clearInterval(intervalId);
    }
  }, (2 * 1000) / props.value);
};

onMounted(() => {
  increaseCounter();
});
</script>

<template>
  <div class="q-pa-lg custom-shadow bg-white column flex-center br-md shadow-3">
    <p
      class="text-h3 text-weight-bold text-primary"
      :style="{ animation: `count ${2}s ease-in-out` }"
    >
      {{ counterValue }}+
    </p>
    <p class="text-subtitle1 text-weight-medium text-grey-7">{{ _title }}</p>
  </div>
</template>

<style scoped lang="css">
@keyframes count {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
