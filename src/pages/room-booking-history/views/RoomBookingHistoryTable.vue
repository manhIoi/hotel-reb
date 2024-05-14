<script setup>
import SectionTitle from "components/SectionTitle.vue";
import { ref } from "vue";
import useRoomBookingHistoryTable from "pages/room-booking-history/composables/useRoomBookingHistoryTable";
import RoomBookingHistoryFilterForm from "pages/room-booking-history/components/RoomBookingHistoryFilterForm.vue";

const {
  roomBookingHistoryRows,
  roomBookingHistoryColumns,
  filterData,
  typeOptions,
  getColorByStatus,
  getTextByStatus,
  isLoading,
  clearFilter,
} = useRoomBookingHistoryTable();
</script>

<template>
  <section-title title="Booking History">
    <q-table
      :rows="roomBookingHistoryRows"
      :columns="roomBookingHistoryColumns"
      row-key="name"
      :loading="isLoading"
      class="no-shadow custom-shadow"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top>
        <q-btn flat round color="primary" icon="filter_alt">
          <q-popup-proxy>
            <room-booking-history-filter-form
              :type-options="typeOptions"
              v-model:filter-data="filterData"
            />
          </q-popup-proxy>
        </q-btn>
        <q-btn
          outline
          label="Clear filter"
          color="primary"
          @click="clearFilter"
        />
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-badge
              :color="getColorByStatus(props.value)"
              :label="getTextByStatus(props.value)"
            />
          </div>
          <div class="my-table-details">
            {{ props.row.name }}
          </div>
        </q-td>
      </template>
    </q-table>
  </section-title>
</template>

<style scoped lang="css"></style>
