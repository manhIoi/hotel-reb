import { useQuasar } from "quasar";
import { ref } from "vue";

export function useLoading(defaultValue = false) {
  const isLoading = ref(defaultValue);
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
