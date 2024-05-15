import { QSpinnerGears, useQuasar } from "quasar";

export function useDialog() {
  const $q = useQuasar();

  function buildParamsDialogByType(type, params) {
    if (type === "confirm") {
      return {
        ...params,
        title: "Confirm",
        ok: {
          label: "Ok",
        },
        cancel: {
          flat: true,
          label: "Cancel",
        },
      };
    }
    if ("loading") {
      return {
        title: "Loading...",
        message: "Please wait a minute",
        progress: {
          spinner: QSpinnerGears,
        },
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      };
    }
    return null;
  }

  function showDialog(type, extraParams) {
    const params = buildParamsDialogByType(type, extraParams);
    return $q.dialog(params);
  }

  return {
    showDialog,
  };
}
