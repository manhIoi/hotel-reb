import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import server from "src/server";

export const useBranchStore = defineStore("branch", () => {
  const branchList = ref(
    JSON.parse(localStorage.getItem("branchList") || "[]")
  );

  onMounted(async () => {
    try {
      const response = await server.getBranchList();
      branchList.value = response.data;
    } catch (e) {
      console.info("LOG_IT:: e", e);
    }
  });

  watch(branchList, () => {
    localStorage.setItem("branchList", JSON.stringify(branchList.value));
  });

  return {
    branchList,
  };
});
