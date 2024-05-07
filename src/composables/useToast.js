import {useQuasar} from "quasar";

export function useToast() {

  const $q = useQuasar();

  function buildNotifyParamsByType(type, message) {
    if (type === 'success') {
      return {
        type: 'positive',
        timeout: 3000,
        position: 'bottom-right',
        message: `🎉 ${message}`
      }
    }
  }

  function showToast(type, message) {
    const params = buildNotifyParamsByType(type, message);
    return $q.notify({
      message,
      ...params,
    })
  }

  return {
    showToast
  }
}
