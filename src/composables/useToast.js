import {useQuasar} from "quasar";

export function useToast({type, message}) {

  const $q = useQuasar();

  function buildNotifyParamsByType() {
    return {
      message
    }
  }

  function show() {
    $q.notify({})
  }

  return {
    show
  }
}
