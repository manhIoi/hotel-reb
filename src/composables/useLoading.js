import { useQuasar } from "quasar";
import { ref } from "vue";

export function useLoading() {
  const isLoading = ref(false);
  function hideLoading() {
    isLoading.value = false;
  }
  function showLoading() {
    isLoading.value = true;
  }

  return {
    isLoading,
    hideLoading,
    showLoading,
  };
}
