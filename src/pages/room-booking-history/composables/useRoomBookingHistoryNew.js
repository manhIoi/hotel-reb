import { computed, onMounted, ref, watch } from "vue";
import server from "src/server";
import { formatDate, formatMoney } from "src/utils";
import { useLoading } from "src/composables";

export default function useRoomBookingHistoryNew() {
  const roomBookingHistoryList = ref([]);
  const { showLoading, hideLoading, isLoading } = useLoading(true);
  const searchFilter = ref("");

  onMounted(async () => {
    try {
      showLoading();
      const response = await server.getRoomBookingHistoryNew();
      if (response.data) {
        roomBookingHistoryList.value = response.data;
      }
    } catch (e) {
    } finally {
      hideLoading();
    }
  });

  const roomBookingHistoryColumns = computed(() => {
    return [
      {
        name: "name",
        label: "Room Name",
        align: "left",
        field: (row) => row.room.name,
      },
      {
        name: "amount",
        label: "Amount",
        align: "center",
        field: (row) => formatMoney("$")(row.room?.amount),
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
      },
      {
        name: "adult",
        label: "Adult",
        align: "center",
        field: (row) => row.extraInformation?.adultNumber,
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
      },
      {
        name: "children",
        label: "Children",
        align: "center",
        field: (row) => row.room?.information?.childrenNumber,
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
      },
      {
        name: "acreage",
        label: "Acreage",
        align: "center",
        field: (row) => row.room?.information?.acreage,
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
      },
      {
        name: "createAt",
        label: "CreateAt",
        align: "center",
        field: (row) => formatDate(row?.createdAt),
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
      },
    ];
  });

  const roomBookingHistoryRows = computed(() => {
    return roomBookingHistoryList.value?.map((item) => {
      return item;
    });
  });

  return {
    roomBookingHistoryRows,
    roomBookingHistoryColumns,
    isLoading,
    searchFilter,
  };
}
