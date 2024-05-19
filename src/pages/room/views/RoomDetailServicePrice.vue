<script setup>
import { formatMoney } from "src/utils";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const tablePriceDayByWeek = {
  columns: [
    { label: "Mon", name: "mon", field: "mon", format: formatMoney("$") },
    { label: "Tue", name: "tue", field: "tue", format: formatMoney("$") },
    { label: "Wed", name: "wed", field: "wed", format: formatMoney("$") },
    { label: "Thu", name: "thu", field: "thu", format: formatMoney("$") },
    { label: "Fri", name: "fri", field: "fri", format: formatMoney("$") },
    { label: "Sat", name: "sat", field: "sat", format: formatMoney("$") },
    { label: "Sun", name: "sun", field: "sun", format: formatMoney("$") },
  ],
  rows: [
    { mon: 100, tue: 100, wed: 100, thu: 100, fri: 100, sat: 100, sun: 100 },
  ],
};

const tablePriceService = {
  columns: [
    {
      name: "service",
      required: true,
      label: "Service",
      align: "left",
      field: "service",
    },
    {
      name: "price",
      align: "center",
      label: "Price/Day",
      field: "price",
      format: formatMoney("$"),
      sortable: true,
    },
  ],
  rows: [
    {
      service: "Swimming",
      price: 100,
    },
    {
      service: "Party outdoor",
      price: 300,
    },
  ],
};
</script>

<template>
  <q-table
    :title="t('roomDetail.tableLabel.room')"
    :rows="tablePriceDayByWeek.rows"
    :columns="tablePriceDayByWeek.columns"
    row-key="name"
    hide-bottom
    flat
    class="custom-shadow table-price q-mb-lg"
  />
  <q-table
    :title="t('roomDetail.tableLabel.extraService')"
    :rows="tablePriceService.rows"
    :columns="tablePriceService.columns"
    row-key="name"
    hide-bottom
    flat
    class="custom-shadow table-price"
  />
</template>

<style scoped lang="css"></style>
