import { computed, onMounted, ref, watch, watchEffect } from "vue";
import server from "src/server";
import { formatDate, formatMoney } from "src/utils";
import { debounce } from "lodash";
import { useRoute, useRouter } from "vue-router";

export default function useRoomBookingHistoryTable() {
  const router = useRouter();
  const route = useRoute();
  const roomBookingHistoryList = ref([]);
  const filterData = ref({
    type: null,
  });
  const typeOptions = [
    { status: 0, name: "NEW" },
    { status: 1, name: "CHECK IN" },
    { status: 2, name: "CHECK OUT" },
  ];
  const roomBookingHistoryColumns = computed(() => {
    return [
      {
        name: "name",
        label: "Room Name",
        align: "left",
        field: (row) => row.room.name,
      },
      {
        name: "status",
        label: "Status",
        align: "center",
        sortable: true,
        sort: (a, b) => parseInt(a) - parseInt(b),
        field: (row) => row.status,
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
        field: (row) => row.room?.information?.adultNumber,
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

  onMounted(async () => {
    try {
      const response = await server.getRoomBookingHistory();
      roomBookingHistoryList.value = response.data;
    } catch (e) {}
  });

  watch(filterData.value, () => {
    debounce(() => {
      router.replace({
        query: {
          ...filterData.value,
          type: filterData.value.type?.status,
        },
      });
    }, 1000)();
  });

  watchEffect(async () => {
    if (route.query) {
      const { type } = route.query;
      filterData.value.type = typeOptions?.find?.(
        (item) => item?.status === type
      ) || {
        status: "",
        name: "",
      };
    }
  });

  function getColorByStatus(status) {
    if (status === 0) return "negative";
    if (status === 1) return "warning";
    if (status === 2) return "success";
  }

  function getTextByStatus(status) {
    return typeOptions.find((item) => item.status === status)?.name;
  }

  return {
    roomBookingHistoryRows,
    roomBookingHistoryColumns,
    filterData,
    typeOptions,
    getColorByStatus,
    getTextByStatus,
  };
}
