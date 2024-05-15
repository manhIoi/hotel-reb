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
    <div class="col-6">
      <q-input
        outlined
        type="number"
        label="Adult number"
        v-model="filterData.adultNumber"
      />
    </div>
    <div class="col-6">
      <q-input
        outlined
        type="number"
        label="Children number"
        v-model="filterData.childrenNumber"
      />
    </div>
    <div class="col-6">
      <q-input
        outlined
        type="number"
        label="Bed number"
        v-model="filterData.bedNumber"
      />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
