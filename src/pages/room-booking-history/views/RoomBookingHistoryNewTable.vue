<script>
import SectionTitle from "components/SectionTitle.vue";
import useRoomBookingHistoryNew from "pages/room-booking-history/composables/useRoomBookingHistoryNew";

export default {
  components: { SectionTitle },

  setup() {
    const {
      roomBookingHistoryColumns,
      roomBookingHistoryRows,
      isLoading,
      searchFilter,
    } = useRoomBookingHistoryNew();

    return {
      roomBookingHistoryColumns,
      roomBookingHistoryRows,
      isLoading,
      searchFilter,
    };
  },
};
</script>

<template>
  <section-title title="New Booking">
    <q-table
      grid
      flat
      :loading="isLoading"
      card-class="bg-primary text-white custom-shadow"
      :rows="roomBookingHistoryRows"
      :columns="roomBookingHistoryColumns"
      row-key="name"
      :filter="searchFilter"
      :pagination="{ rowsPerPage: 4 }"
      hide-header
      class="custom-shadow q-px-md bg-white"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top-left>
        <q-input
          dense
          debounce="300"
          v-model="searchFilter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </section-title>
</template>

<style scoped lang="css"></style>
