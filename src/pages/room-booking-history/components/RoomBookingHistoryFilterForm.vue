<script setup>
const filterData = defineModel("filterData");
const { typeOptions } = defineProps({
  typeOptions: Array,
});
</script>

<template>
  <div class="row q-pa-md q-col-gutter-sm" style="min-width: 600px">
    <div class="col-6">
      <q-select
        outlined
        v-model="filterData.type"
        :options="typeOptions"
        option-value="status"
        option-label="name"
        label="Select status"
      />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
